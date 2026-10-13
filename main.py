import glob
import sys

# Динамическое обнаружение и подключение стандартной библиотеки Python в SteamOS (SteamOS 3.6+ / Python 3.13)
def _ensure_stdlib_paths():
    patterns = [
        "/usr/lib/python3*/",
        "/usr/lib64/python3*/",
        "/usr/lib/python3*/*-packages/",
    ]
    for pattern in patterns:
        for path in sorted(glob.glob(pattern), reverse=True):
            if path not in sys.path:
                sys.path.append(path)

_ensure_stdlib_paths()

import asyncio
import json
import os
import re
import urllib.request
import urllib.error

import decky_plugin

# Список известных игр с VAC или серверным античитом
KNOWN_VAC_OR_PROTECTED_APPIDS = {
    730,     # Counter-Strike 2 / CS:GO
    440,     # Team Fortress 2
    570,     # Dota 2
    550,     # Left 4 Dead 2
    500,     # Left 4 Dead
    10,      # Counter-Strike 1.6
    80,      # Counter-Strike: Condition Zero
    240,     # Counter-Strike: Source
    300,     # Day of Defeat: Source
    30,      # Day of Defeat
    40,      # Deathmatch Classic
    60,      # Ricochet
    320,     # Half-Life 2: Deathmatch
    252490,  # Rust (Easy Anti-Cheat)
    218620,  # PAYDAY 2
    230410,  # Warframe
    218230,  # PlanetSide 2
    381210,  # Dead by Daylight
    1172470, # Apex Legends
    1938090, # Call of Duty (Ricochet)
}

# Известные чисто мультиплеерные проекты
KNOWN_MULTIPLAYER_APPIDS = {
    105600,  # Terraria
    252490,  # Rust
    413150,  # Stardew Valley (co-op)
    108600,  # Project Zomboid
    251570,  # 7 Days to Die
    221100,  # DayZ
    892970,  # Valheim
    1091500, # Cyberpunk 2077 (single)
}

# Маппинг для названий языков Steam schema
STEAM_LANG_MAP = {
    "arabic": "arabic",
    "bulgarian": "bulgarian",
    "schinese": "schinese",
    "tchinese": "tchinese",
    "czech": "czech",
    "danish": "danish",
    "dutch": "dutch",
    "english": "english",
    "finnish": "finnish",
    "french": "french",
    "german": "german",
    "greek": "greek",
    "hungarian": "hungarian",
    "indonesian": "indonesian",
    "italian": "italian",
    "japanese": "japanese",
    "koreana": "koreana",
    "korean": "koreana",
    "latam": "LATAM",
    "malay": "malay",
    "norwegian": "norwegian",
    "polish": "polish",
    "portuguese": "portuguese",
    "brazilian": "brazilian",
    "romanian": "romanian",
    "russian": "russian",
    "spanish": "spanish",
    "swedish": "swedish",
    "thai": "thai",
    "turkish": "turkish",
    "ukrainian": "ukrainian",
    "vietnamese": "vietnamese",
}

class Plugin:
    def __init__(self):
        self.sam_binary_path = None
        self.steamclient_path = None
        self.protection_cache = {}  # app_id -> {"is_vac": bool, "is_multiplayer": bool}
        self.current_steam_language = "english"

    async def _main(self):
        decky_plugin.logger.info("SAM plugin starting...")
        self._resolve_paths()
        self.current_steam_language = self._detect_steam_language()
        decky_plugin.logger.info(f"SAM: detected Steam language: {self.current_steam_language}")

    async def _unload(self):
        decky_plugin.logger.info("SAM plugin unloaded.")

    def _resolve_paths(self):
        plugin_dir = getattr(decky_plugin, "DECKY_PLUGIN_DIR", os.path.dirname(os.path.abspath(__file__)))
        candidate = os.path.join(plugin_dir, "bin", "samrewritten")
        if os.path.exists(candidate) and os.access(candidate, os.X_OK):
            self.sam_binary_path = candidate
        else:
            self.sam_binary_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "bin", "samrewritten")

        possible_steamclient_paths = [
            os.path.expanduser("~/.local/share/Steam/linux64/steamclient.so"),
            os.path.expanduser("~/.steam/root/linux64/steamclient.so"),
            os.path.expanduser("~/.steam/steam/linux64/steamclient.so"),
            os.path.expanduser("~/.local/share/Steam/steamrt64/steamclient.so"),
        ]
        for p in possible_steamclient_paths:
            if os.path.exists(p):
                self.steamclient_path = p
                break

        decky_plugin.logger.info(f"SAM: binary={self.sam_binary_path}, steamclient={self.steamclient_path}")

    def _detect_steam_language(self) -> str:
        paths = [
            os.path.expanduser("~/.steam/registry.vdf"),
            os.path.expanduser("~/.local/share/Steam/registry.vdf"),
        ]
        for p in paths:
            if os.path.exists(p):
                try:
                    with open(p, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()
                        m = re.search(r'"language"\s+"([^"]+)"', content, re.IGNORECASE)
                        if m:
                            lang = m.group(1).lower().strip()
                            return STEAM_LANG_MAP.get(lang, lang)
                except Exception as ex:
                    decky_plugin.logger.warning(f"Error reading Steam language from {p}: {ex}")
        return "english"

    async def get_system_language(self) -> dict:
        """Возвращает текущий язык Steam."""
        lang = self._detect_steam_language()
        self.current_steam_language = lang
        return {"language": lang}

    async def check_app_protection(self, app_id: int) -> dict:
        """
        Проверяет игру на VAC и наличие мультиплеера.
        Возвращает: {"is_vac": bool, "is_multiplayer": bool}
        """
        app_id = int(app_id)
        if app_id in self.protection_cache:
            return self.protection_cache[app_id]

        is_vac = False
        is_multiplayer = False

        if app_id in KNOWN_VAC_OR_PROTECTED_APPIDS:
            is_vac = True
            is_multiplayer = True

        # Проверка через Steam Store API categories
        try:
            loop = asyncio.get_running_loop()
            store_res = await loop.run_in_executor(None, self._check_store_categories, app_id)
            if store_res.get("is_vac", False):
                is_vac = True
            if store_res.get("is_multiplayer", False):
                is_multiplayer = True
        except Exception as e:
            decky_plugin.logger.error(f"SAM: Error checking categories for {app_id}: {e}")

        result = {
            "is_vac": is_vac,
            "is_multiplayer": is_multiplayer
        }
        self.protection_cache[app_id] = result
        return result

    def _check_store_categories(self, app_id: int) -> dict:
        url = f"https://store.steampowered.com/api/appdetails?appids={app_id}&filters=categories"
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (SAM; SteamOS)"}
        )
        is_vac = False
        is_multiplayer = False
        try:
            with urllib.request.urlopen(req, timeout=5) as response:
                if response.status == 200:
                    data = json.loads(response.read().decode("utf-8"))
                    app_data = data.get(str(app_id), {})
                    if app_data.get("success", False):
                        categories = app_data.get("data", {}).get("categories", [])
                        multiplayer_cat_ids = {1, 9, 36, 38, 49} # Multi-player, Co-op, Online PvP, Online Co-op, PvP
                        for cat in categories:
                            cat_id = cat.get("id")
                            cat_desc = cat.get("description", "").lower()
                            if cat_id == 8 or "anti-cheat" in cat_desc or "vac" in cat_desc:
                                is_vac = True
                            if cat_id in multiplayer_cat_ids or "multi-player" in cat_desc or "co-op" in cat_desc or "pvp" in cat_desc:
                                is_multiplayer = True
        except Exception as ex:
            decky_plugin.logger.debug(f"Store API check error: {ex}")
        return {"is_vac": is_vac, "is_multiplayer": is_multiplayer}

    async def _execute_sam(self, args: list) -> tuple:
        if not self.sam_binary_path or not os.path.exists(self.sam_binary_path):
            self._resolve_paths()
            if not self.sam_binary_path or not os.path.exists(self.sam_binary_path):
                return False, "SAM binary not found"

        env = os.environ.copy()
        if self.steamclient_path:
            env["SAM_STEAMCLIENT_PATH"] = self.steamclient_path

        cmd = [self.sam_binary_path, "--stealth"] + args
        try:
            proc = await asyncio.create_subprocess_exec(
                *cmd,
                env=env,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )
            stdout, stderr = await proc.communicate()
            if proc.returncode != 0:
                err_msg = stderr.decode("utf-8", errors="replace").strip()
                decky_plugin.logger.error(f"SAM command failed ({proc.returncode}): {err_msg}")
                return False, err_msg
            return True, stdout.decode("utf-8", errors="replace")
        except Exception as e:
            decky_plugin.logger.error(f"Exception executing SAM: {e}")
            return False, str(e)

    async def get_achievements(self, app_id: int, allow_multiplayer: bool = False, language: str = None) -> dict:
        """Получает список достижений для игры с учетом настроек безопасности и языка."""
        app_id = int(app_id)
        prot = await self.check_app_protection(app_id)
        is_vac = prot.get("is_vac", False)
        is_multiplayer = prot.get("is_multiplayer", False)

        if is_vac:
            return {
                "success": False,
                "is_vac": True,
                "is_multiplayer": is_multiplayer,
                "error": "VAC_PROTECTED"
            }

        if is_multiplayer and not allow_multiplayer:
            return {
                "success": False,
                "is_vac": False,
                "is_multiplayer": True,
                "error": "MULTIPLAYER_BLOCKED"
            }

        # Определяем язык для схемы ачивок
        target_lang = language or self.current_steam_language or self._detect_steam_language()
        schema_lang = STEAM_LANG_MAP.get(target_lang.lower(), target_lang)

        cmd_args = ["list-achievements"]
        if schema_lang:
            cmd_args.extend(["--language", schema_lang])
        cmd_args.append(str(app_id))

        success, output = await self._execute_sam(cmd_args)
        if not success:
            # Если запрос с языком завершился ошибкой схемы, пробуем без --language
            if "--language" in cmd_args:
                success, output = await self._execute_sam(["list-achievements", str(app_id)])
            if not success:
                err_text = output or ""
                # Проверка: сторонняя игра (Non-Steam shortcut)
                if app_id > 2147483647 or "is not on this account" in err_text:
                    return {
                        "success": False,
                        "is_vac": False,
                        "is_multiplayer": is_multiplayer,
                        "error": "NON_STEAM_GAME",
                        "raw_error": err_text
                    }
                # Проверка: отсутствие достижений или схемы статистики
                if "UserGameStatsSchema" in err_text or "SocketCommunication failed" in err_text or "No such file or directory" in err_text:
                    return {
                        "success": False,
                        "is_vac": False,
                        "is_multiplayer": is_multiplayer,
                        "error": "NO_ACHIEVEMENTS",
                        "raw_error": err_text
                    }
                return {"success": False, "is_vac": False, "is_multiplayer": is_multiplayer, "error": output}

        try:
            achievements = json.loads(output)
            return {
                "success": True,
                "is_vac": False,
                "is_multiplayer": is_multiplayer,
                "achievements": achievements
            }
        except Exception as e:
            return {"success": False, "is_vac": False, "is_multiplayer": is_multiplayer, "error": f"JSON parse error: {e}"}

    async def unlock_achievement(self, app_id: int, achievement_id: str, allow_multiplayer: bool = False) -> dict:
        """Разблокирует одно конкретное достижение."""
        app_id = int(app_id)
        prot = await self.check_app_protection(app_id)
        if prot.get("is_vac", False):
            return {"success": False, "is_vac": True, "error": "VAC_PROTECTED"}
        if prot.get("is_multiplayer", False) and not allow_multiplayer:
            return {"success": False, "is_multiplayer": True, "error": "MULTIPLAYER_BLOCKED"}

        success, output = await self._execute_sam(["unlock", str(app_id), str(achievement_id)])
        if not success:
            return {"success": False, "error": output}
        return {"success": True, "message": f"Достижение {achievement_id} разблокировано"}

    async def lock_achievement(self, app_id: int, achievement_id: str, allow_multiplayer: bool = False) -> dict:
        """Блокирует (сбрасывает) одно конкретное достижение."""
        app_id = int(app_id)
        prot = await self.check_app_protection(app_id)
        if prot.get("is_vac", False):
            return {"success": False, "is_vac": True, "error": "VAC_PROTECTED"}
        if prot.get("is_multiplayer", False) and not allow_multiplayer:
            return {"success": False, "is_multiplayer": True, "error": "MULTIPLAYER_BLOCKED"}

        success, output = await self._execute_sam(["lock", str(app_id), str(achievement_id)])
        if not success:
            return {"success": False, "error": output}
        return {"success": True, "message": f"Достижение {achievement_id} заблокировано"}

    async def unlock_all(self, app_id: int, allow_multiplayer: bool = False) -> dict:
        """Разблокирует все достижения для игры."""
        app_id = int(app_id)
        prot = await self.check_app_protection(app_id)
        if prot.get("is_vac", False):
            return {"success": False, "is_vac": True, "error": "VAC_PROTECTED"}
        if prot.get("is_multiplayer", False) and not allow_multiplayer:
            return {"success": False, "is_multiplayer": True, "error": "MULTIPLAYER_BLOCKED"}

        success, output = await self._execute_sam(["unlock-all", str(app_id)])
        if not success:
            return {"success": False, "error": output}
        return {"success": True, "message": "Все достижения успешно разблокированы!"}

    async def lock_all(self, app_id: int, allow_multiplayer: bool = False) -> dict:
        """Сбрасывает все достижения для игры."""
        app_id = int(app_id)
        prot = await self.check_app_protection(app_id)
        if prot.get("is_vac", False):
            return {"success": False, "is_vac": True, "error": "VAC_PROTECTED"}
        if prot.get("is_multiplayer", False) and not allow_multiplayer:
            return {"success": False, "is_multiplayer": True, "error": "MULTIPLAYER_BLOCKED"}

        success, output = await self._execute_sam(["lock-all", str(app_id)])
        if not success:
            return {"success": False, "error": output}
        return {"success": True, "message": "Все достижения успешно сброшены!"}
