🌐 **Languages:** **[Русский](README.md)** • [English](docs/translations/README_en.md) • [简体中文](docs/translations/README_zh-CN.md) • [繁體中文](docs/translations/README_zh-TW.md) • [日本語](docs/translations/README_ja.md) • [한국어](docs/translations/README_ko.md) • [Deutsch](docs/translations/README_de.md) • [Français](docs/translations/README_fr.md) • [Español](docs/translations/README_es.md) • [Español (Latinoamérica)](docs/translations/README_es-419.md) • [Italiano](docs/translations/README_it.md) • [Português (Brasil)](docs/translations/README_pt-BR.md) • [Português (Portugal)](docs/translations/README_pt.md) • [Polski](docs/translations/README_pl.md) • [Українська](docs/translations/README_uk.md) • [Türkçe](docs/translations/README_tr.md) • [Nederlands](docs/translations/README_nl.md) • [Čeština](docs/translations/README_cs.md) • [Magyar](docs/translations/README_hu.md) • [Svenska](docs/translations/README_sv.md) • [Dansk](docs/translations/README_da.md) • [Norsk](docs/translations/README_no.md) • [Suomi](docs/translations/README_fi.md) • [Ελληνικά](docs/translations/README_el.md) • [Български](docs/translations/README_bg.md) • [Română](docs/translations/README_ro.md) • [ไทย](docs/translations/README_th.md) • [Tiếng Việt](docs/translations/README_vi.md) • [Bahasa Indonesia](docs/translations/README_id.md) • [Bahasa Melayu](docs/translations/README_ms.md)

<p align="center">
  <img src="logo.png" alt="SAM Logo" width="180" />
</p>

<h1 align="center">SAM (Steam Achievement Manager) для Decky Loader</h1>

<p align="center">
  <em>Создано специально для каталога [Decky Loader Россия](https://www.deckyloader.ru/)</em>
</p>

---

**SAM** — нативный плагин для [Decky Loader](https://decky.xyz/) на **Steam Deck** (SteamOS), позволяющий гибко управлять достижениями Steam прямо из игрового режима (Quick Access Menu).

### 🎯 Зачем нужен этот плагин?
- **Повторное прохождение:** Позволяет заблокировать (сбросить) уже полученные достижения, чтобы заново пережить радость их открытия при новом прохождении любимой игры.
- **Исправление забагованных ачивок:** Если из-за внутриигровой ошибки или сетевого сбоя достижение не выпало честным путем, вы можете легко разблокировать его вручную.
- **Удобство на Steam Deck:** Никаких переходов в режим рабочего стола, запуска сторонних exe-файлов через Wine/Proton — всё работает нативно, быстро и оптимизировано под управление контроллером.

## ✨ Возможности
- 🎮 **Автоопределение запущенной игры** через API Decky Loader.
- ⚡ **Управление в один клик:** Разблокировка или блокировка как отдельных достижений, так и всех сразу («Разблокировать все» / «Сбросить все»).
- 📜 **Бегущая строка и адаптивный интерфейс:** Длинные названия ачивок аккуратно прокручиваются, квадратные кнопки идеально вписываются в меню Decky.
- 🔍 **Поиск и фильтрация:** Поиск по названию, фильтры: Все / Полученные / Закрытые.
- 🌍 **Мультиязычность (30 языков):** Полный перевод интерфейса плагина, а также автоматическая подгрузка названий и описаний достижений на языке вашего клиента Steam.
- 🛡️ **Встроенная система безопасности:**
  - **Полный запрет игр с VAC:** Игры с Valve Anti-Cheat (CS2, TF2, L4D2 и др.) блокируются автоматически и намертво.
  - **Защита для мультиплеера:** Сетевые игры заблокированы по умолчанию. Включение поддержки мультиплеера доступно только тогда, когда игра не запущена (в настройках внизу с предупреждением о рисках).
  - **Информационные окна:** Понятные подсказки для сторонних игр (Non-Steam) и игр без достижений.

## ⚠️ Предупреждение о безопасности и рисках
Использование модификаторов достижений в онлайн-играх может нарушать правила отдельных разработчиков или серверов. 
- Плагин **навсегда блокирует** доступ к играм с защитой **VAC (Valve Anti-Cheat)**.
- Работа с мультиплеерными играми по умолчанию выключена. Вы включаете её на свой страх и риск.
- Рекомендуется использовать плагин преимущественно в одиночных играх.

## 📦 Установка
1. Скачайте архив `SAM.zip` из последнего [Релиза](https://github.com/Kowalski-coder/SAM-for-Decky-Loader/releases) или каталога [deckyloader.ru](https://www.deckyloader.ru/).
2. В Quick Access Menu (кнопка `...`) откройте вкладку **Decky Loader**.
3. Нажмите на иконку шестеренки (Настройки Decky) -> **Developer** -> **Install plugin from ZIP**.
4. Выберите скачанный файл `SAM.zip`.

---

## ☕ Поддержать автора
Если вам понравился плагин и вы хотите поддержать дальнейшую разработку новых плагинов и переводов:

[![Boosty](https://img.shields.io/badge/Поддержать_на-Boosty-orange?style=for-the-badge&logo=boosty)](https://boosty.to/viktorkoval1997)
