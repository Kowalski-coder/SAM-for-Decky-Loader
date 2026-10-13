const manifest = {"name":"SAM"};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
const callable = api.callable;
const toaster = api.toaster;
const definePlugin = (fn) => {
    return (...args) => {
        return fn(...args);
    };
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaUnlock (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},"child":[]}]})(props);
}function FaTrophy (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},"child":[]}]})(props);
}function FaLock (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},"child":[]}]})(props);
}function FaInfoCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},"child":[]}]})(props);
}function FaExclamationTriangle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},"child":[]}]})(props);
}

const translations = {
    // 1. Русский (Russian)
    russian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Безопасность аккаунта:',
        securityNotice: 'Игры с VAC (CS2, TF2 и др.) блокируются автоматически. Не изменяйте достижения во время игры в онлайне.',
        gameSelection: 'Выбор игры',
        activeGame: 'Активная игра',
        gameNotRunning: 'Игра не запущена',
        refreshGame: 'Обновить текущую игру',
        enterAppId: 'Указать AppID игры',
        loadByAppId: 'Загрузить по AppID',
        loading: 'Загрузка...',
        vacProtectedTitle: 'Защита VAC активирована',
        vacProtectedDesc: 'Внимание: игра защищена Valve Anti-Cheat! Управление достижениями для данной игры полностью отключено во избежание блокировки.',
        multiplayerBlockedTitle: 'Мультиплеерная игра заблокирована',
        multiplayerBlockedDesc: 'По умолчанию плагин работает только с одиночными играми для предотвращения банов. Разрешить работу с мультиплеером можно в настройках плагина, когда игра не запущена (на свой страх и риск).',
        achievements: 'Достижения',
        unlockAll: 'Разблокировать все',
        lockAll: 'Сбросить все',
        searchPlaceholder: 'Поиск по названию',
        filterStatus: 'Фильтр статуса',
        filterAll: 'Все',
        filterUnlocked: 'Полученные',
        filterLocked: 'Закрытые',
        playersUnlocked: 'У {percent}% игроков',
        noAchievementsFound: 'Достижения не найдены',
        noAchievementsForGame: 'У этой игры нет достижений в Steam или статистика недоступна.',
        toastUnlocked: 'Достижение "{name}" разблокировано!',
        toastLocked: 'Достижение "{name}" заблокировано',
        toastUnlockAll: 'Все достижения разблокированы!',
        toastLockAll: 'Все достижения сброшены',
        toastError: 'Ошибка',
        allowMultiplayerLabel: 'Разрешить для мультиплеерных игр',
        allowMultiplayerDesc: 'Включает поддержку игр с сетевым режимом (кроме VAC)',
        multiplayerWarningRisk: 'Внимание! Изменение достижений в мультиплеерных играх может привести к бану со стороны разработчиков игры или античита. Вы используете эту функцию на свой страх и риск! Игры с VAC всё равно останутся заблокированы.',
        nonSteamGameTitle: "Сторонняя игра",
        nonSteamGameDesc: "Данная игра добавлена в Steam как стороннее приложение. Достижения Steam поддерживаются только официальными играми из магазина Steam.",
        noAchievementsTitle: "Достижения отсутствуют",
        noAchievementsDesc: "Для данной игры разработчиками не предусмотрены достижения Steam или статистика недоступна.",
    },
    // 2. Английский (English) - default
    english: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Account Security:',
        securityNotice: 'VAC-protected games (CS2, TF2, etc.) are automatically blocked. Do not modify achievements while connected to online servers.',
        gameSelection: 'Game Selection',
        activeGame: 'Active Game',
        gameNotRunning: 'Game is not running',
        refreshGame: 'Refresh current game',
        enterAppId: 'Enter game AppID',
        loadByAppId: 'Load by AppID',
        loading: 'Loading...',
        vacProtectedTitle: 'VAC Protection Enabled',
        vacProtectedDesc: 'Warning: This game is protected by Valve Anti-Cheat! Achievement management for this game is completely disabled to prevent bans.',
        multiplayerBlockedTitle: 'Multiplayer Game Blocked',
        multiplayerBlockedDesc: 'By default, this plugin only works with single-player games to prevent bans. You can enable multiplayer support in plugin settings when no game is running (at your own risk).',
        achievements: 'Achievements',
        unlockAll: 'Unlock All',
        lockAll: 'Lock All',
        searchPlaceholder: 'Search by title',
        filterStatus: 'Status Filter',
        filterAll: 'All',
        filterUnlocked: 'Unlocked',
        filterLocked: 'Locked',
        playersUnlocked: '{percent}% of players',
        noAchievementsFound: 'No achievements found',
        noAchievementsForGame: 'This game has no Steam achievements or stats are unavailable.',
        toastUnlocked: 'Achievement "{name}" unlocked!',
        toastLocked: 'Achievement "{name}" locked',
        toastUnlockAll: 'All achievements unlocked!',
        toastLockAll: 'All achievements reset',
        toastError: 'Error',
        allowMultiplayerLabel: 'Allow for multiplayer games',
        allowMultiplayerDesc: 'Enables support for games with online/multiplayer modes (except VAC)',
        multiplayerWarningRisk: 'Warning! Modifying achievements in multiplayer games may lead to bans from game developers or server anti-cheat. Use this feature at your own risk! VAC-protected games remain permanently blocked.',
        nonSteamGameTitle: "Non-Steam Game",
        nonSteamGameDesc: "This application was added to Steam as a non-Steam shortcut. Steam achievements are only available for official Steam store games.",
        noAchievementsTitle: "No Achievements Found",
        noAchievementsDesc: "This game does not include any Steam achievements, or its stats schema is unavailable.",
    },
    // 3. Упрощенный китайский (Simplified Chinese - schinese)
    schinese: {
        title: 'Steam Achievement Manager',
        accountSecurity: '账户安全：',
        securityNotice: '受 VAC 保护的游戏（CS2、TF2 等）会被自动拦截。请勿在连接在线服务器时修改成就。',
        gameSelection: '选择游戏',
        activeGame: '当前运行游戏',
        gameNotRunning: '未运行游戏',
        refreshGame: '刷新当前游戏',
        enterAppId: '输入游戏 AppID',
        loadByAppId: '按 AppID 加载',
        loading: '加载中...',
        vacProtectedTitle: 'VAC 保护已启用',
        vacProtectedDesc: '警告：此游戏受 Valve Anti-Cheat 保护！为防止封禁，该游戏的成就管理功能已完全禁用。',
        multiplayerBlockedTitle: '多人游戏已被拦截',
        multiplayerBlockedDesc: '默认情况下，为防止封禁，本插件仅支持单人游戏。您可以在未运行游戏时于插件设置中自行承担风险开启多人游戏支持。',
        achievements: '成就',
        unlockAll: '全部解锁',
        lockAll: '全部锁定',
        searchPlaceholder: '按名称搜索',
        filterStatus: '状态筛选',
        filterAll: '全部',
        filterUnlocked: '已解锁',
        filterLocked: '未解锁',
        playersUnlocked: '{percent}% 的玩家获得',
        noAchievementsFound: '未找到成就',
        noAchievementsForGame: '此游戏没有 Steam 成就或统计数据不可用。',
        toastUnlocked: '成就 "{name}" 已解锁！',
        toastLocked: '成就 "{name}" 已锁定',
        toastUnlockAll: '所有成就已解锁！',
        toastLockAll: '所有成就已重置',
        toastError: '错误',
        allowMultiplayerLabel: '允许多人游戏',
        allowMultiplayerDesc: '启用对具有在线/多人模式游戏的支持（VAC 游戏除外）',
        multiplayerWarningRisk: '警告！在多人游戏中修改成就可能导致被游戏开发者或服务器反作弊系统封禁。风险自负！VAC 游戏仍将保持禁用。',
        nonSteamGameTitle: "非 Steam 游戏",
        nonSteamGameDesc: "此游戏作为非 Steam 快捷方式添加。Steam 成就仅适用于官方 Steam 商店游戏。",
        noAchievementsTitle: "无成就",
        noAchievementsDesc: "此游戏未包含任何 Steam 成就，或统计数据不可用。",
    },
    // 4. Традиционный китайский (Traditional Chinese - tchinese)
    tchinese: {
        title: 'Steam Achievement Manager',
        accountSecurity: '帳戶安全：',
        securityNotice: '受 VAC 保護的遊戲（CS2、TF2 等）會自動封鎖。請勿在連接線上伺服器時修改成就。',
        gameSelection: '選擇遊戲',
        activeGame: '目前運行遊戲',
        gameNotRunning: '未運行遊戲',
        refreshGame: '重新整理目前遊戲',
        enterAppId: '輸入遊戲 AppID',
        loadByAppId: '依 AppID 載入',
        loading: '載入中...',
        vacProtectedTitle: 'VAC 保護已啟用',
        vacProtectedDesc: '警告：此遊戲受 Valve Anti-Cheat 保護！為防止封鎖，該遊戲的成就管理功能已全面停用。',
        multiplayerBlockedTitle: '多人遊戲已被封鎖',
        multiplayerBlockedDesc: '預設情況下，為防封鎖，此外掛僅支援單人遊戲。您可以在未執行遊戲時於外掛設定中自行承擔風險啟用多人遊戲支援。',
        achievements: '成就',
        unlockAll: '全部解鎖',
        lockAll: '全部鎖定',
        searchPlaceholder: '依名稱搜尋',
        filterStatus: '狀態篩選',
        filterAll: '全部',
        filterUnlocked: '已解鎖',
        filterLocked: '未解鎖',
        playersUnlocked: '{percent}% 的玩家擁有',
        noAchievementsFound: '找不到成就',
        noAchievementsForGame: '此遊戲沒有 Steam 成就或統計數據無法取得。',
        toastUnlocked: '成就 "{name}" 已解鎖！',
        toastLocked: '成就 "{name}" 已鎖定',
        toastUnlockAll: '所有成就已解鎖！',
        toastLockAll: '所有成就已重設',
        toastError: '錯誤',
        allowMultiplayerLabel: '允許多人遊戲',
        allowMultiplayerDesc: '啟用對具有線上/多人模式遊戲的支援（VAC 遊戲除外）',
        multiplayerWarningRisk: '警告！在多人遊戲中修改成就可能導致被遊戲開發者或反作弊系統封鎖。風險自負！VAC 遊戲仍將保持禁用。',
        nonSteamGameTitle: "非 Steam 遊戲",
        nonSteamGameDesc: "此遊戲作為非 Steam 捷徑新增。Steam 成就僅適用於官方 Steam 商店遊戲。",
        noAchievementsTitle: "無成就",
        noAchievementsDesc: "此遊戲未包含任何 Steam 成就，或統計資料無法取得。",
    },
    // 5. Японский (Japanese)
    japanese: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'アカウントのセキュリティ:',
        securityNotice: 'VAC 保護されたゲーム（CS2、TF2 など）は自動的にブロックされます。オンラインサーバー接続中に実績を変更しないでください。',
        gameSelection: 'ゲームの選択',
        activeGame: '実行中のゲーム',
        gameNotRunning: 'ゲームが起動していません',
        refreshGame: '現在のゲームを更新',
        enterAppId: 'ゲームの AppID を入力',
        loadByAppId: 'AppID で読み込み',
        loading: '読み込み中...',
        vacProtectedTitle: 'VAC 保護が有効です',
        vacProtectedDesc: '警告: このゲームは Valve Anti-Cheat によって保護されています。BAN を防ぐため、実績管理は無効化されています。',
        multiplayerBlockedTitle: 'マルチプレイヤーゲームがブロックされました',
        multiplayerBlockedDesc: 'BAN 防止のため、デフォルトではシングルプレイヤー専用ゲームのみ動作します。ゲームが起動していない時に設定から自己責任でマルチプレイヤーを有効にできます。',
        achievements: '実績',
        unlockAll: 'すべて解除',
        lockAll: 'すべてロック',
        searchPlaceholder: '名前で検索',
        filterStatus: 'ステータスフィルター',
        filterAll: 'すべて',
        filterUnlocked: '解除済み',
        filterLocked: '未解除',
        playersUnlocked: 'プレイヤーの {percent}% が獲得',
        noAchievementsFound: '実績が見つかりません',
        noAchievementsForGame: 'このゲームには Steam 実績がないか、統計を取得できません。',
        toastUnlocked: '実績「{name}」を解除しました！',
        toastLocked: '実績「{name}」をロックしました',
        toastUnlockAll: 'すべての実績を解除しました！',
        toastLockAll: 'すべての実績をリセットしました',
        toastError: 'エラー',
        allowMultiplayerLabel: 'マルチプレイヤーゲームを許可',
        allowMultiplayerDesc: 'オンライン/マルチプレイヤーモードを持つゲームのサポートを有効化（VAC を除く）',
        multiplayerWarningRisk: '警告！マルチプレイヤーゲームでの実績変更は開発者やアンチチートによる BAN のリスクがあります。自己責任でご使用ください！VAC ゲームは常にブロックされます。',
        nonSteamGameTitle: "非Steamゲーム",
        nonSteamGameDesc: "このゲームは非Steamショートカットとして登録されています。Steamの実績はSteamストアの公式ゲームでのみ利用できます。",
        noAchievementsTitle: "実績がありません",
        noAchievementsDesc: "このゲームにはSteamの実績が設定されていないか、データを利用できません。",
    },
    // 6. Корейский (Korean - koreana)
    koreana: {
        title: 'Steam Achievement Manager',
        accountSecurity: '계정 보안:',
        securityNotice: 'VAC 보호 게임(CS2, TF2 등)은 자동으로 차단됩니다. 온라인 서버에 접속 중일 때는 도전 과제를 변경하지 마십시오.',
        gameSelection: '게임 선택',
        activeGame: '실행 중인 게임',
        gameNotRunning: '게임이 실행되지 않음',
        refreshGame: '현재 게임 새로고침',
        enterAppId: '게임 AppID 입력',
        loadByAppId: 'AppID로 불러오기',
        loading: '불러오는 중...',
        vacProtectedTitle: 'VAC 보호 활성화됨',
        vacProtectedDesc: '경고: 이 게임은 Valve Anti-Cheat로 보호됩니다! 제재를 방지하기 위해 이 게임의 도전 과제 관리가 완전히 비활성화되었습니다.',
        multiplayerBlockedTitle: '멀티플레이어 게임 차단됨',
        multiplayerBlockedDesc: '제재 방지를 위해 기본적으로 싱글플레이어 게임에서만 작동합니다. 게임이 실행 중이지 않을 때 설정에서 위험을 감수하고 멀티플레이어 지원을 활성화할 수 있습니다.',
        achievements: '도전 과제',
        unlockAll: '모두 잠금 해제',
        lockAll: '모두 잠금',
        searchPlaceholder: '이름으로 검색',
        filterStatus: '상태 필터',
        filterAll: '전체',
        filterUnlocked: '잠금 해제됨',
        filterLocked: '잠김',
        playersUnlocked: '플레이어의 {percent}%가 달성',
        noAchievementsFound: '도전 과제를 찾을 수 없습니다',
        noAchievementsForGame: '이 게임에는 Steam 도전 과제가 없거나 통계를 사용할 수 없습니다.',
        toastUnlocked: '도전 과제 "{name}" 잠금 해제됨!',
        toastLocked: '도전 과제 "{name}" 잠김',
        toastUnlockAll: '모든 도전 과제가 잠금 해제되었습니다!',
        toastLockAll: '모든 도전 과제가 초기화되었습니다',
        toastError: '오류',
        allowMultiplayerLabel: '멀티플레이어 게임 허용',
        allowMultiplayerDesc: '온라인/멀티플레이 모드가 있는 게임 지원 활성화 (VAC 제외)',
        multiplayerWarningRisk: '경고! 멀티플레이어 게임에서 도전 과제를 수정하면 게임 개발사 또는 안티치트에 의해 제재될 수 있습니다. 본인 책임하에 사용하십시오! VAC 게임은 계속 차단됩니다.',
        nonSteamGameTitle: "비-Steam 게임",
        nonSteamGameDesc: "이 게임은 비-Steam 바로가기로 등록되었습니다. Steam 도전 과제는 공식 Steam 상점 게임에서만 지원됩니다.",
        noAchievementsTitle: "도전 과제 없음",
        noAchievementsDesc: "이 게임에는 Steam 도전 과제가 없거나 통계 정보를 불러올 수 없습니다.",
    },
    // 7. Немецкий (German)
    german: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Kontosicherheit:',
        securityNotice: 'VAC-geschützte Spiele (CS2, TF2 usw.) werden automatisch blockiert. Ändern Sie keine Erfolge auf Online-Servern.',
        gameSelection: 'Spielauswahl',
        activeGame: 'Aktives Spiel',
        gameNotRunning: 'Kein Spiel gestartet',
        refreshGame: 'Aktuelles Spiel aktualisieren',
        enterAppId: 'Spiel-AppID eingeben',
        loadByAppId: 'Über AppID laden',
        loading: 'Laden...',
        vacProtectedTitle: 'VAC-Schutz aktiviert',
        vacProtectedDesc: 'Warnung: Dieses Spiel ist durch Valve Anti-Cheat geschützt! Die Verwaltung von Erfolgen ist deaktiviert, um Ausschlüsse zu verhindern.',
        multiplayerBlockedTitle: 'Mehrspieler-Spiel blockiert',
        multiplayerBlockedDesc: 'Standardmäßig funktioniert das Plugin nur mit Einzelspieler-Spielen. Sie können die Mehrspieler-Unterstützung in den Einstellungen aktivieren, wenn kein Spiel läuft (auf eigenes Risiko).',
        achievements: 'Erfolge',
        unlockAll: 'Alle freischalten',
        lockAll: 'Alle sperren',
        searchPlaceholder: 'Nach Name suchen',
        filterStatus: 'Statusfilter',
        filterAll: 'Alle',
        filterUnlocked: 'Freigeschaltet',
        filterLocked: 'Gesperrt',
        playersUnlocked: 'Von {percent}% der Spieler',
        noAchievementsFound: 'Keine Erfolge gefunden',
        noAchievementsForGame: 'Dieses Spiel hat keine Steam-Erfolge oder Statistiken sind nicht verfügbar.',
        toastUnlocked: 'Erfolg "{name}" freigeschaltet!',
        toastLocked: 'Erfolg "{name}" gesperrt',
        toastUnlockAll: 'Alle Erfolge freigeschaltet!',
        toastLockAll: 'Alle Erfolge zurückgesetzt',
        toastError: 'Fehler',
        allowMultiplayerLabel: 'Für Mehrspieler-Spiele erlauben',
        allowMultiplayerDesc: 'Aktiviert Unterstützung für Online-/Mehrspieler-Spiele (außer VAC)',
        multiplayerWarningRisk: 'Warnung! Das Ändern von Erfolgen in Mehrspieler-Spielen kann zu Sperren führen. Nutzung auf eigene Gefahr! VAC-Spiele bleiben dauerhaft gesperrt.',
        nonSteamGameTitle: "Steam-fremdes Spiel",
        nonSteamGameDesc: "Dieses Spiel wurde als Steam-fremde Verknüpfung hinzugefügt. Steam-Errungenschaften werden nur von offiziellen Steam-Shop-Spielen unterstützt.",
        noAchievementsTitle: "Keine Errungenschaften",
        noAchievementsDesc: "Dieses Spiel bietet keine Steam-Errungenschaften oder die Statistikdaten sind nicht verfügbar.",
    },
    // 8. Французский (French)
    french: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Sécurité du compte :',
        securityNotice: 'Les jeux protégés par VAC (CS2, TF2, etc.) sont automatiquement bloqués. Ne modifiez pas vos succès en ligne.',
        gameSelection: 'Sélection du jeu',
        activeGame: 'Jeu actif',
        gameNotRunning: 'Aucun jeu lancé',
        refreshGame: 'Actualiser le jeu en cours',
        enterAppId: 'Ou entrez l\'AppID du jeu',
        loadByAppId: 'Charger par AppID',
        loading: 'Chargement...',
        vacProtectedTitle: 'Protection VAC activée',
        vacProtectedDesc: 'Attention : ce jeu est protégé par Valve Anti-Cheat ! La gestion des succès est désactivée pour éviter tout bannissement.',
        multiplayerBlockedTitle: 'Jeu multijoueur bloqué',
        multiplayerBlockedDesc: 'Par défaut, ce plugin ne fonctionne qu\'avec les jeux solo pour éviter les bannissements. Vous pouvez l\'activer ci-dessous à vos risques et périls.',
        achievements: 'Succès',
        unlockAll: 'Tout débloquer',
        lockAll: 'Tout verrouiller',
        searchPlaceholder: 'Rechercher par titre',
        filterStatus: 'Filtre de statut',
        filterAll: 'Tous',
        filterUnlocked: 'Débloqués',
        filterLocked: 'Verrouillés',
        playersUnlocked: '{percent}% des joueurs',
        noAchievementsFound: 'Aucun succès trouvé',
        noAchievementsForGame: 'Ce jeu n\'a pas de succès Steam ou les statistiques sont indisponibles.',
        toastUnlocked: 'Succès "{name}" débloqué !',
        toastLocked: 'Succès "{name}" verrouillé',
        toastUnlockAll: 'Tous les succès ont été débloqués !',
        toastLockAll: 'Tous les succès ont été réinitialisés',
        toastError: 'Erreur',
        allowMultiplayerLabel: 'Autoriser pour les jeux multijoueurs',
        allowMultiplayerDesc: 'Active la prise en charge des jeux en ligne/multijoueurs (sauf VAC)',
        multiplayerWarningRisk: 'Attention ! Modifier les succès dans les jeux multijoueurs peut entraîner des bannissements. À utiliser à vos risques et périls ! Les jeux VAC restent bloqués.',
        nonSteamGameTitle: "Jeu non-Steam",
        nonSteamGameDesc: "Ce jeu a été ajouté en tant que raccourci non-Steam. Les succès Steam ne sont pris en charge que pour les jeux officiels du magasin Steam.",
        noAchievementsTitle: "Aucun succès",
        noAchievementsDesc: "Ce jeu ne contient aucun succès Steam ou les statistiques sont indisponibles.",
    },
    // 9. Испанский (Испания - spanish)
    spanish: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Seguridad de la cuenta:',
        securityNotice: 'Los juegos protegidos por VAC (CS2, TF2, etc.) se bloquean automáticamente. No modifiques logros mientras juegas online.',
        gameSelection: 'Selección de juego',
        activeGame: 'Juego activo',
        gameNotRunning: 'No hay juego en ejecución',
        refreshGame: 'Actualizar juego actual',
        enterAppId: 'Introducir AppID del juego',
        loadByAppId: 'Cargar por AppID',
        loading: 'Cargando...',
        vacProtectedTitle: 'Protección VAC activada',
        vacProtectedDesc: 'Advertencia: ¡este juego está protegido por Valve Anti-Cheat! La gestión de logros está desactivada para evitar baneos.',
        multiplayerBlockedTitle: 'Juego multijugador bloqueado',
        multiplayerBlockedDesc: 'Por defecto, el plugin solo funciona con juegos individuales para evitar bloqueos. Puedes habilitar multijugador en los ajustes cuando no haya ningún juego en ejecución (bajo tu propio riesgo).',
        achievements: 'Logros',
        unlockAll: 'Desbloquear todos',
        lockAll: 'Bloquear todos',
        searchPlaceholder: 'Buscar por título',
        filterStatus: 'Filtro de estado',
        filterAll: 'Todos',
        filterUnlocked: 'Desbloqueados',
        filterLocked: 'Bloqueados',
        playersUnlocked: '{percent}% de los jugadores',
        noAchievementsFound: 'No se encontraron logros',
        noAchievementsForGame: 'Este juego no tiene logros de Steam o las estadísticas no están disponibles.',
        toastUnlocked: '¡Logro "{name}" desbloqueado!',
        toastLocked: 'Logro "{name}" bloqueado',
        toastUnlockAll: '¡Todos los logros desbloqueados!',
        toastLockAll: 'Todos los logros restablecidos',
        toastError: 'Error',
        allowMultiplayerLabel: 'Permitir en juegos multijugador',
        allowMultiplayerDesc: 'Habilita soporte para juegos online/multijugador (excepto VAC)',
        multiplayerWarningRisk: '¡Advertencia! Modificar logros en juegos multijugador puede provocar sanciones. ¡Úsalo bajo tu propio riesgo! Los juegos con VAC permanecerán bloqueados.',
        nonSteamGameTitle: "Juego que no es de Steam",
        nonSteamGameDesc: "Este juego se agregó como acceso directo que no es de Steam. Los logros de Steam solo están disponibles para juegos oficiales de la tienda Steam.",
        noAchievementsTitle: "Sin logros",
        noAchievementsDesc: "Este juego no incluye logros de Steam o las estadísticas no están disponibles.",
    },
    // 10. Испанский (Латинская Америка - latam)
    latam: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Seguridad de la cuenta:',
        securityNotice: 'Los juegos protegidos por VAC (CS2, TF2, etc.) se bloquean automáticamente. No modifiques logros mientras juegas en línea.',
        gameSelection: 'Selección de juego',
        activeGame: 'Juego activo',
        gameNotRunning: 'No hay juego ejecutándose',
        refreshGame: 'Actualizar juego actual',
        enterAppId: 'Ingresar AppID del juego',
        loadByAppId: 'Cargar por AppID',
        loading: 'Cargando...',
        vacProtectedTitle: 'Protección VAC activada',
        vacProtectedDesc: 'Advertencia: ¡este juego está protegido por Valve Anti-Cheat! La gestión de logros está deshabilitada para prevenir baneos.',
        multiplayerBlockedTitle: 'Juego multijugador bloqueado',
        multiplayerBlockedDesc: 'Por defecto, el plugin solo funciona con juegos individuales. Puedes habilitar multijugador en la configuración cuando ningún juego esté ejecutándose (bajo tu propio riesgo).',
        achievements: 'Logros',
        unlockAll: 'Desbloquear todos',
        lockAll: 'Bloquear todos',
        searchPlaceholder: 'Buscar por título',
        filterStatus: 'Filtro de estado',
        filterAll: 'Todos',
        filterUnlocked: 'Desbloqueados',
        filterLocked: 'Bloqueados',
        playersUnlocked: '{percent}% de los jugadores',
        noAchievementsFound: 'No se encontraron logros',
        noAchievementsForGame: 'Este juego no tiene logros de Steam o las estadísticas no están disponibles.',
        toastUnlocked: '¡Logro "{name}" desbloqueado!',
        toastLocked: 'Logro "{name}" bloqueado',
        toastUnlockAll: '¡Todos los logros desbloqueados!',
        toastLockAll: 'Todos los logros restablecidos',
        toastError: 'Error',
        allowMultiplayerLabel: 'Permitir en juegos multijugador',
        allowMultiplayerDesc: 'Habilita soporte para juegos online/multijugador (excepto VAC)',
        multiplayerWarningRisk: '¡Advertencia! Modificar logros en juegos multijugador puede causar baneos. ¡Úsalo bajo tu propio riesgo! Los juegos con VAC seguirán bloqueados.',
        nonSteamGameTitle: "Juego fuera de Steam",
        nonSteamGameDesc: "Este juego fue agregado como un acceso directo fuera de Steam. Los logros de Steam solo funcionan con juegos oficiales de la tienda Steam.",
        noAchievementsTitle: "Sin logros",
        noAchievementsDesc: "Este juego no tiene logros de Steam o las estadísticas no están disponibles.",
    },
    // 11. Итальянский (Italian)
    italian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Sicurezza dell\'account:',
        securityNotice: 'I giochi protetti da VAC (CS2, TF2, ecc.) sono bloccati automaticamente. Non modificare gli obiettivi sui server online.',
        gameSelection: 'Selezione gioco',
        activeGame: 'Gioco attivo',
        gameNotRunning: 'Nessun gioco in esecuzione',
        refreshGame: 'Aggiorna gioco corrente',
        enterAppId: 'Inserisci AppID del gioco',
        loadByAppId: 'Carica per AppID',
        loading: 'Caricamento...',
        vacProtectedTitle: 'Protezione VAC abilitata',
        vacProtectedDesc: 'Attenzione: questo gioco è protetto da Valve Anti-Cheat! La gestione degli obiettivi è disattivata per evitare ban.',
        multiplayerBlockedTitle: 'Gioco multigiocatore bloccato',
        multiplayerBlockedDesc: 'Per impostazione predefinita, il plugin funziona solo con i giochi per giocatore singolo. Puoi abilitare il multiplayer nelle impostazioni quando nessun gioco è avviato (a tuo rischio).',
        achievements: 'Obiettivi',
        unlockAll: 'Sblocca tutti',
        lockAll: 'Blocca tutti',
        searchPlaceholder: 'Cerca per titolo',
        filterStatus: 'Filtro stato',
        filterAll: 'Tutti',
        filterUnlocked: 'Sbloccati',
        filterLocked: 'Bloccati',
        playersUnlocked: '{percent}% dei giocatori',
        noAchievementsFound: 'Nessun obiettivo trovato',
        noAchievementsForGame: 'Questo gioco non ha obiettivi Steam o le statistiche non sono disponibili.',
        toastUnlocked: 'Obiettivo "{name}" sbloccato!',
        toastLocked: 'Obiettivo "{name}" bloccato',
        toastUnlockAll: 'Tutti gli obiettivi sbloccati!',
        toastLockAll: 'Tutti gli obiettivi reimpostati',
        toastError: 'Errore',
        allowMultiplayerLabel: 'Consenti per giochi multigiocatore',
        allowMultiplayerDesc: 'Abilita supporto per giochi con modalità online (eccetto VAC)',
        multiplayerWarningRisk: 'Attenzione! Modificare obiettivi nei giochi multigiocatore può causare ban. Usa a tuo rischio! I giochi VAC restano bloccati.',
        nonSteamGameTitle: "Gioco non-Steam",
        nonSteamGameDesc: "Questo gioco è stato aggiunto come collegamento non-Steam. Gli obiettivi Steam sono disponibili solo per i giochi ufficiali del negozio Steam.",
        noAchievementsTitle: "Nessun obiettivo",
        noAchievementsDesc: "Questo gioco non include obiettivi Steam o i dati statistici non sono disponibili.",
    },
    // 12. Португальский - Бразилия (Brazilian)
    brazilian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Segurança da conta:',
        securityNotice: 'Jogos protegidos por VAC (CS2, TF2, etc.) são bloqueados automaticamente. Não altere conquistas jogando online.',
        gameSelection: 'Seleção de jogo',
        activeGame: 'Jogo ativo',
        gameNotRunning: 'Nenhum jogo em execução',
        refreshGame: 'Atualizar jogo atual',
        enterAppId: 'Inserir AppID do jogo',
        loadByAppId: 'Carregar por AppID',
        loading: 'Carregando...',
        vacProtectedTitle: 'Proteção VAC ativada',
        vacProtectedDesc: 'Aviso: este jogo é protegido pelo Valve Anti-Cheat! O gerenciamento de conquistas está desativado para prevenir banimentos.',
        multiplayerBlockedTitle: 'Jogo multijogador bloqueado',
        multiplayerBlockedDesc: 'Por padrão, este plugin só funciona com jogos individuais para prevenir banimentos. Você pode ativar o multijogador nas configurações quando nenhum jogo estiver em execução (por sua conta e risco).',
        achievements: 'Conquistas',
        unlockAll: 'Desbloquear todas',
        lockAll: 'Bloquear todas',
        searchPlaceholder: 'Buscar por título',
        filterStatus: 'Filtro de status',
        filterAll: 'Todas',
        filterUnlocked: 'Desbloqueadas',
        filterLocked: 'Bloqueadas',
        playersUnlocked: '{percent}% dos jogadores',
        noAchievementsFound: 'Nenhuma conquista encontrada',
        noAchievementsForGame: 'Este jogo não possui conquistas Steam ou as estatísticas estão indisponíveis.',
        toastUnlocked: 'Conquista "{name}" desbloqueada!',
        toastLocked: 'Conquista "{name}" bloqueada',
        toastUnlockAll: 'Todas as conquistas desbloqueadas!',
        toastLockAll: 'Todas as conquistas redefinidas',
        toastError: 'Erro',
        allowMultiplayerLabel: 'Permitir em jogos multijogador',
        allowMultiplayerDesc: 'Ativa suporte para jogos com modo online (exceto VAC)',
        multiplayerWarningRisk: 'Aviso! Modificar conquistas em jogos multijogador pode resultar em banimento. Use por sua conta e risco! Jogos com VAC continuarão bloqueados.',
        nonSteamGameTitle: "Jogo não Steam",
        nonSteamGameDesc: "Este jogo foi adicionado como um atalho não Steam. As conquistas Steam só são compatíveis com jogos oficiais da loja Steam.",
        noAchievementsTitle: "Sem conquistas",
        noAchievementsDesc: "Este jogo não possui conquistas Steam ou as estatísticas não estão disponíveis.",
    },
    // 13. Португальский - Португалия (Portuguese)
    portuguese: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Segurança da conta:',
        securityNotice: 'Jogos protegidos por VAC (CS2, TF2, etc.) são bloqueados automaticamente. Não altere proezas ligado a servidores online.',
        gameSelection: 'Seleção de jogo',
        activeGame: 'Jogo ativo',
        gameNotRunning: 'Nenhum jogo em execução',
        refreshGame: 'Atualizar jogo atual',
        enterAppId: 'Introduzir AppID do jogo',
        loadByAppId: 'Carregar por AppID',
        loading: 'A carregar...',
        vacProtectedTitle: 'Proteção VAC ativada',
        vacProtectedDesc: 'Aviso: este jogo está protegido pelo Valve Anti-Cheat! A gestão de proezas está desativada para evitar banimentos.',
        multiplayerBlockedTitle: 'Jogo multijogador bloqueado',
        multiplayerBlockedDesc: 'Por predefinição, o plugin só funciona com jogos individuais. Pode ativar o multijogador nas definições quando nenhum jogo estiver em execução (por sua conta e risco).',
        achievements: 'Proezas',
        unlockAll: 'Desbloquear todas',
        lockAll: 'Bloquear todas',
        searchPlaceholder: 'Pesquisar por título',
        filterStatus: 'Filtro de estado',
        filterAll: 'Todas',
        filterUnlocked: 'Desbloqueadas',
        filterLocked: 'Bloqueadas',
        playersUnlocked: '{percent}% dos jogadores',
        noAchievementsFound: 'Nenhuma proeza encontrada',
        noAchievementsForGame: 'Este jogo não tem proezas Steam ou as estatísticas estão indisponíveis.',
        toastUnlocked: 'Proeza "{name}" desbloqueada!',
        toastLocked: 'Proeza "{name}" bloqueada',
        toastUnlockAll: 'Todas as proezas desbloqueadas!',
        toastLockAll: 'Todas as proezas repostas',
        toastError: 'Erro',
        allowMultiplayerLabel: 'Permitir em jogos multijogador',
        allowMultiplayerDesc: 'Ativa suporte para jogos multijogador (exceto VAC)',
        multiplayerWarningRisk: 'Aviso! Alterar proezas em jogos multijogador pode levar a banimentos. Use por sua conta e risco! Jogos VAC continuam bloqueados.',
        nonSteamGameTitle: "Jogo não-Steam",
        nonSteamGameDesc: "Este jogo foi adicionado como um atalho não-Steam. As proezas Steam só estão disponíveis em jogos oficiais da loja Steam.",
        noAchievementsTitle: "Sem proezas",
        noAchievementsDesc: "Este jogo não contém proezas Steam ou os dados estatísticos estão indisponíveis.",
    },
    // 14. Польский (Polish)
    polish: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Bezpieczeństwo konta:',
        securityNotice: 'Gry z VAC (CS2, TF2 itp.) są automatycznie blokowane. Nie modyfikuj osiągnięć podczas gry na serwerach online.',
        gameSelection: 'Wybór gry',
        activeGame: 'Aktywna gra',
        gameNotRunning: 'Żadna gra nie jest uruchomiona',
        refreshGame: 'Odśwież bieżącą grę',
        enterAppId: 'Wprowadź AppID gry',
        loadByAppId: 'Wczytaj wg AppID',
        loading: 'Ładowanie...',
        vacProtectedTitle: 'Ochrona VAC włączona',
        vacProtectedDesc: 'Ostrzeżenie: Ta gra jest chroniona przez Valve Anti-Cheat! Modyfikacja osiągnięć jest zablokowana, aby zapobiec banom.',
        multiplayerBlockedTitle: 'Gra wieloosobowa zablokowana',
        multiplayerBlockedDesc: 'Domyślnie wtyczka działa tylko z grami jednoosobowymi. Możesz włączyć obsługę gier wieloosobowych w ustawieniach, gdy żadna gra nie jest uruchomiona (na własne ryzyko).',
        achievements: 'Osiągnięcia',
        unlockAll: 'Odblokuj wszystkie',
        lockAll: 'Zablokuj wszystkie',
        searchPlaceholder: 'Szukaj po nazwie',
        filterStatus: 'Filtr statusu',
        filterAll: 'Wszystkie',
        filterUnlocked: 'Odblokowane',
        filterLocked: 'Zablokowane',
        playersUnlocked: 'U {percent}% graczy',
        noAchievementsFound: 'Nie znaleziono osiągnięć',
        noAchievementsForGame: 'Ta gra nie ma osiągnięć Steam lub statystyki są niedostępne.',
        toastUnlocked: 'Osiągnięcie "{name}" odblokowane!',
        toastLocked: 'Osiągnięcie "{name}" zablokowane',
        toastUnlockAll: 'Wszystkie osiągnięcia odblokowane!',
        toastLockAll: 'Wszystkie osiągnięcia zresetowane',
        toastError: 'Błąd',
        allowMultiplayerLabel: 'Zezwól na gry wieloosobowe',
        allowMultiplayerDesc: 'Włącza obsługę gier z trybem online (z wyjątkiem VAC)',
        multiplayerWarningRisk: 'Ostrzeżenie! Zmiana osiągnięć w grach wieloosobowych może prowadzić do bana. Używasz na własne ryzyko! Gry VAC pozostają zablokowane.',
        nonSteamGameTitle: "Gra spoza Steam",
        nonSteamGameDesc: "Ta gra została dodana jako skrót spoza Steam. Osiągnięcia Steam są obsługiwane tylko przez oficjalne gry ze sklepu Steam.",
        noAchievementsTitle: "Brak osiągnięć",
        noAchievementsDesc: "Ta gra nie posiada osiągnięć Steam lub statystyki są niedostępne.",
    },
    // 15. Украинский (Ukrainian)
    ukrainian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Безпека акаунту:',
        securityNotice: 'Ігри з VAC (CS2, TF2 тощо) блокуються автоматично. Не змінюйте досягнення під час гри онлайн.',
        gameSelection: 'Вибір гри',
        activeGame: 'Активна гра',
        gameNotRunning: 'Гру не запущено',
        refreshGame: 'Оновити поточну гру',
        enterAppId: 'Вказати AppID гри',
        loadByAppId: 'Завантажити за AppID',
        loading: 'Завантаження...',
        vacProtectedTitle: 'Захист VAC активовано',
        vacProtectedDesc: 'Увага: гра захищена Valve Anti-Cheat! Керування досягненнями для цієї гри вимкнено для запобігання банам.',
        multiplayerBlockedTitle: 'Багатокористувацьку гру заблоковано',
        multiplayerBlockedDesc: 'За замовчуванням плагін працює лише з поодинокими іграми для запобігання банам. Дозволити мультиплеєр можна в налаштуваннях плагіна, коли гру не запущено (на свій страх і ризик).',
        achievements: 'Досягнення',
        unlockAll: 'Розблокувати всі',
        lockAll: 'Скинути всі',
        searchPlaceholder: 'Пошук за назвою',
        filterStatus: 'Фільтр статусу',
        filterAll: 'Всі',
        filterUnlocked: 'Отримані',
        filterLocked: 'Закриті',
        playersUnlocked: 'У {percent}% гравців',
        noAchievementsFound: 'Досягнень не знайдено',
        noAchievementsForGame: 'У цієї гри немає досягнень Steam або статистика недоступна.',
        toastUnlocked: 'Досягнення "{name}" розблоковано!',
        toastLocked: 'Досягнення "{name}" заблоковано',
        toastUnlockAll: 'Всі досягнення розблоковано!',
        toastLockAll: 'Всі досягнення скинуто',
        toastError: 'Помилка',
        allowMultiplayerLabel: 'Дозволити для мультиплеєрних ігор',
        allowMultiplayerDesc: 'Увімкнути підтримку ігор з мережевим режимом (крім VAC)',
        multiplayerWarningRisk: 'Увага! Зміна досягнень у багатокористувацьких іграх може призвести до бану розробниками гри чи античитом. Використовуйте на свій страх і ризик! Ігри з VAC залишаться заблокованими.',
        nonSteamGameTitle: "Стороння гра",
        nonSteamGameDesc: "Цю гру додано до Steam як сторонній ярлик. Досягнення Steam підтримуються лише для офіційних ігор із крамниці Steam.",
        noAchievementsTitle: "Досягнення відсутні",
        noAchievementsDesc: "У цій грі немає досягнень Steam або статистика наразі недоступна.",
    },
    // 16. Турецкий (Turkish)
    turkish: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Hesap Güvenliği:',
        securityNotice: 'VAC korumalı oyunlar (CS2, TF2 vb.) otomatik olarak engellenir. Çevrimiçi sunuculardayken başarımları değiştirmeyin.',
        gameSelection: 'Oyun Seçimi',
        activeGame: 'Aktif Oyun',
        gameNotRunning: 'Oyun çalışmıyor',
        refreshGame: 'Mevcut oyunu yenile',
        enterAppId: 'Veya oyunun AppID\'sini girin',
        loadByAppId: 'AppID ile yükle',
        loading: 'Yükleniyor...',
        vacProtectedTitle: 'VAC Koruması Etkin',
        vacProtectedDesc: 'Uyarı: Bu oyun Valve Anti-Cheat ile korunmaktadır! Banlanmayı önlemek için başarım yönetimi devre dışı bırakılmıştır.',
        multiplayerBlockedTitle: 'Çok Oyunculu Oyun Engellendi',
        multiplayerBlockedDesc: 'Banlanmaları önlemek için bu eklenti varsayılan olarak yalnızca tek oyunculu oyunlarda çalışır. Hiçbir oyun çalışmıyorken ayarlardan riski göze alarak çok oyunculu desteğini açabilirsiniz.',
        achievements: 'Başarımlar',
        unlockAll: 'Tümünün Kilidini Aç',
        lockAll: 'Tümünü Kilitle',
        searchPlaceholder: 'İsme göre ara',
        filterStatus: 'Durum Filtresi',
        filterAll: 'Tümü',
        filterUnlocked: 'Açılmış',
        filterLocked: 'Kilitli',
        playersUnlocked: 'Oyuncuların %{percent}\'i',
        noAchievementsFound: 'Başarım bulunamadı',
        noAchievementsForGame: 'Bu oyunda Steam başarımı yok veya istatistikler kullanılamıyor.',
        toastUnlocked: '"{name}" başarımı açıldı!',
        toastLocked: '"{name}" başarımı kilitlendi',
        toastUnlockAll: 'Tüm başarımlar açıldı!',
        toastLockAll: 'Tüm başarımlar sıfırlandı',
        toastError: 'Hata',
        allowMultiplayerLabel: 'Çok oyunculu oyunlara izin ver',
        allowMultiplayerDesc: 'Çevrimiçi/çok oyunculu oyunlar için desteği etkinleştirir (VAC hariç)',
        multiplayerWarningRisk: 'Uyarı! Çok oyunculu oyunlarda başarım değiştirmek geliştiriciler veya hile koruma sistemleri tarafından banlanmaya yol açabilir. Riski size aittir! VAC oyunları engelli kalmaya devam edecektir.',
        nonSteamGameTitle: "Steam Dışı Oyun",
        nonSteamGameDesc: "Bu oyun Steam dışı bir kısayol olarak eklendi. Steam başarımları yalnızca resmi Steam mağazası oyunları için geçerlidir.",
        noAchievementsTitle: "Başarım Bulunamadı",
        noAchievementsDesc: "Bu oyunda herhangi bir Steam başarımı bulunmamaktadır veya istatistikler kullanılamıyor.",
    },
    // 17. Нидерландский (Dutch)
    dutch: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Accountbeveiliging:',
        securityNotice: 'VAC-beveiligde spellen (CS2, TF2, etc.) worden automatisch geblokkeerd. Pas geen prestaties aan terwijl je online speelt.',
        gameSelection: 'Spelkeuze',
        activeGame: 'Actief spel',
        gameNotRunning: 'Geen spel gestart',
        refreshGame: 'Huidig spel vernieuwen',
        enterAppId: 'Voer AppID van spel in',
        loadByAppId: 'Laden via AppID',
        loading: 'Laden...',
        vacProtectedTitle: 'VAC-beveiliging ingeschakeld',
        vacProtectedDesc: 'Waarschuwing: dit spel wordt beschermd door Valve Anti-Cheat! Prestatiebeheer is uitgeschakeld om bans te voorkomen.',
        multiplayerBlockedTitle: 'Multiplayer-spel geblokkeerd',
        multiplayerBlockedDesc: 'Standaard werkt deze plug-in alleen met singleplayer-spellen. Je kunt multiplayer-ondersteuning inschakelen in de instellingen wanneer er geen spel actief is (op eigen risico).',
        achievements: 'Prestaties',
        unlockAll: 'Alles ontgrendelen',
        lockAll: 'Alles vergrendelen',
        searchPlaceholder: 'Zoeken op titel',
        filterStatus: 'Statusfilter',
        filterAll: 'Alles',
        filterUnlocked: 'Ontgrendeld',
        filterLocked: 'Vergrendeld',
        playersUnlocked: '{percent}% van de spelers',
        noAchievementsFound: 'Geen prestaties gevonden',
        noAchievementsForGame: 'Dit spel heeft geen Steam-prestaties of statistieken zijn niet beschikbaar.',
        toastUnlocked: 'Prestatie "{name}" ontgrendeld!',
        toastLocked: 'Prestatie "{name}" vergrendeld',
        toastUnlockAll: 'Alle prestaties ontgrendeld!',
        toastLockAll: 'Alle prestaties gereset',
        toastError: 'Fout',
        allowMultiplayerLabel: 'Toestaan voor multiplayer-spellen',
        allowMultiplayerDesc: 'Schakelt ondersteuning in voor spellen met online modi (behalve VAC)',
        multiplayerWarningRisk: 'Waarschuwing! Het aanpassen van prestaties in multiplayer-spellen kan leiden tot bans. Gebruik op eigen risico! VAC-spellen blijven geblokkeerd.',
        nonSteamGameTitle: "Niet-Steam-spel",
        nonSteamGameDesc: "Dit spel is toegevoegd als een niet-Steam-snelkoppeling. Steam-prestaties zijn alleen beschikbaar voor officiële spellen uit de Steam-winkel.",
        noAchievementsTitle: "Geen prestaties",
        noAchievementsDesc: "Dit spel bevat geen Steam-prestaties of de statistieken zijn niet beschikbaar.",
    },
    // 18. Чешский (Czech)
    czech: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Zabezpečení účtu:',
        securityNotice: 'Hry chráněné systémem VAC (CS2, TF2 atd.) jsou automaticky blokovány. Neupravujte úspěchy během hraní online.',
        gameSelection: 'Výběr hry',
        activeGame: 'Aktivní hra',
        gameNotRunning: 'Žádná hra neběží',
        refreshGame: 'Obnovit aktuální hru',
        enterAppId: 'Zadat AppID hry',
        loadByAppId: 'Načíst podle AppID',
        loading: 'Načítání...',
        vacProtectedTitle: 'Ochrana VAC aktivována',
        vacProtectedDesc: 'Upozornění: Tato hra je chráněna systémem Valve Anti-Cheat! Správa úspěchů je zakázána, aby se zabránilo banu.',
        multiplayerBlockedTitle: 'Multiplayerová hra zablokována',
        multiplayerBlockedDesc: 'Ve výchozím nastavení funguje plugin pouze s hrami pro jednoho hráče. Podporu multiplayeru můžete povolit v nastavení, když neběží žádná hra (na vlastní nebezpečí).',
        achievements: 'Úspěchy',
        unlockAll: 'Odemknout vše',
        lockAll: 'Uzamknout vše',
        searchPlaceholder: 'Hledat podle názvu',
        filterStatus: 'Filtr stavu',
        filterAll: 'Vše',
        filterUnlocked: 'Odemčené',
        filterLocked: 'Uzamčené',
        playersUnlocked: 'U {percent}% hráčů',
        noAchievementsFound: 'Nebyly nalezeny žádné úspěchy',
        noAchievementsForGame: 'Tato hra nemá žádné úspěchy na Steamu nebo statistiky nejsou k dispozici.',
        toastUnlocked: 'Úspěch "{name}" odemčen!',
        toastLocked: 'Úspěch "{name}" uzamčen',
        toastUnlockAll: 'Všechny úspěchy odemčeny!',
        toastLockAll: 'Všechny úspěchy resetovány',
        toastError: 'Chyba',
        allowMultiplayerLabel: 'Povolit pro multiplayerové hry',
        allowMultiplayerDesc: 'Povolí podporu pro hry s online režimem (kromě VAC)',
        multiplayerWarningRisk: 'Upozornění! Úprava úspěchů v multiplayerových hrách může vést k banu. Použití na vlastní nebezpečí! Hry s VAC zůstanou zablokovány.',
        nonSteamGameTitle: "Hra mimo službu Steam",
        nonSteamGameDesc: "Tato hra byla přidána jako zástupce mimo službu Steam. Úspěchy služby Steam jsou dostupné pouze u oficiálních her z obchodu Steam.",
        noAchievementsTitle: "Žádné úspěchy",
        noAchievementsDesc: "Tato hra neobsahuje žádné úspěchy služby Steam nebo statistiky nejsou k dispozici.",
    },
    // 19. Венгерский (Hungarian)
    hungarian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Fiókbiztonság:',
        securityNotice: 'A VAC által védett játékok (CS2, TF2 stb.) automatikusan letiltásra kerülnek. Ne módosíts teljesítményeket online szervereken.',
        gameSelection: 'Játék kiválasztása',
        activeGame: 'Aktív játék',
        gameNotRunning: 'Nincs futó játék',
        refreshGame: 'Jelenlegi játék frissítése',
        enterAppId: 'Játék AppID megadása',
        loadByAppId: 'Betöltés AppID alapján',
        loading: 'Betöltés...',
        vacProtectedTitle: 'VAC védelem bekapcsolva',
        vacProtectedDesc: 'Figyelem: A játékot a Valve Anti-Cheat védi! A kitiltások elkerülése érdekében a teljesítmények kezelése le van tiltva.',
        multiplayerBlockedTitle: 'Többjátékos játék letiltva',
        multiplayerBlockedDesc: 'Alapértelmezés szerint a bővítmény csak egyjátékos játékokkal működik. A többjátékos módot a beállításokban engedélyezheted, amikor nem fut játék (saját felelősségre).',
        achievements: 'Teljesítmények',
        unlockAll: 'Összes feloldása',
        lockAll: 'Összes zárolása',
        searchPlaceholder: 'Keresés név alapján',
        filterStatus: 'Állapotszűrő',
        filterAll: 'Összes',
        filterUnlocked: 'Feloldva',
        filterLocked: 'Zárolva',
        playersUnlocked: 'A játékosok {percent}%-ánál',
        noAchievementsFound: 'Nem találhatók teljesítmények',
        noAchievementsForGame: 'Ehhez a játékhoz nincsenek Steam teljesítmények vagy statisztikák.',
        toastUnlocked: '"{name}" teljesítmény feloldva!',
        toastLocked: '"{name}" teljesítmény zárolva',
        toastUnlockAll: 'Minden teljesítmény feloldva!',
        toastLockAll: 'Minden teljesítmény visszaállítva',
        toastError: 'Hiba',
        allowMultiplayerLabel: 'Engedélyezés többjátékos játékokhoz',
        allowMultiplayerDesc: 'Többjátékos móddal rendelkező játékok támogatása (kivéve VAC)',
        multiplayerWarningRisk: 'Figyelem! Többjátékos játékokban a teljesítmények módosítása kitiltáshoz vezethet. Csak saját felelősségre! A VAC-os játékok tiltva maradnak.',
        nonSteamGameTitle: "Nem Steam-játék",
        nonSteamGameDesc: "Ez a játék nem Steam parancsikonként lett hozzáadva. A Steam teljesítmények csak a hivatalos Steam áruházi játékokhoz érhetők el.",
        noAchievementsTitle: "Nincsenek teljesítmények",
        noAchievementsDesc: "Ez a játék nem tartalmaz Steam teljesítményeket, vagy a statisztikák nem érhetők el.",
    },
    // 20. Шведский (Swedish)
    swedish: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Kontosäkerhet:',
        securityNotice: 'VAC-skyddade spel (CS2, TF2 etc.) blockeras automatiskt. Ändra inte prestationer när du spelar online.',
        gameSelection: 'Välj spel',
        activeGame: 'Aktivt spel',
        gameNotRunning: 'Inget spel körs',
        refreshGame: 'Uppdatera aktivt spel',
        enterAppId: 'Ange spelets AppID',
        loadByAppId: 'Ladda via AppID',
        loading: 'Laddar...',
        vacProtectedTitle: 'VAC-skydd aktiverat',
        vacProtectedDesc: 'Varning: Detta spel skyddas av Valve Anti-Cheat! Prestationshantering är inaktiverad för att förhindra avstängning.',
        multiplayerBlockedTitle: 'Flerspelarspel blockerat',
        multiplayerBlockedDesc: 'Som standard fungerar tillägget endast med enspelarspel. Du kan aktivera flerspelarläge i inställningarna när inget spel körs (på egen risk).',
        achievements: 'Prestationer',
        unlockAll: 'Lås upp alla',
        lockAll: 'Lås alla',
        searchPlaceholder: 'Sök efter namn',
        filterStatus: 'Statusfilter',
        filterAll: 'Alla',
        filterUnlocked: 'Upplåsta',
        filterLocked: 'Låsta',
        playersUnlocked: '{percent}% av spelarna',
        noAchievementsFound: 'Inga prestationer hittades',
        noAchievementsForGame: 'Det här spelet har inga Steam-prestationer eller så saknas statistik.',
        toastUnlocked: 'Prestationen "{name}" upplåst!',
        toastLocked: 'Prestationen "{name}" låst',
        toastUnlockAll: 'Alla prestationer upplåsta!',
        toastLockAll: 'Alla prestationer återställda',
        toastError: 'Fel',
        allowMultiplayerLabel: 'Tillåt för flerspelarspel',
        allowMultiplayerDesc: 'Aktiverar stöd för spel med onlineläge (förutom VAC)',
        multiplayerWarningRisk: 'Varning! Ändring av prestationer i flerspelarspel kan leda till avstängning. Använd på egen risk! VAC-spel förblir blockerade.',
        nonSteamGameTitle: "Icke-Steam-spel",
        nonSteamGameDesc: "Det här spelet har lagts till som en icke-Steam-genväg. Steam-framsteg stöds endast för officiella spel från Steam-butiken.",
        noAchievementsTitle: "Inga framsteg",
        noAchievementsDesc: "Det här spelet har inga Steam-framsteg eller så är statistiken inte tillgänglig.",
    },
    // 21. Датский (Danish)
    danish: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Kontosikkerhed:',
        securityNotice: 'VAC-beskyttede spil (CS2, TF2 osv.) blokeres automatisk. Rediger ikke præstationer, mens du spiller online.',
        gameSelection: 'Vælg spil',
        activeGame: 'Aktivt spil',
        gameNotRunning: 'Intet spil kører',
        refreshGame: 'Opdater aktuelt spil',
        enterAppId: 'Indtast spillets AppID',
        loadByAppId: 'Indlæs med AppID',
        loading: 'Indlæser...',
        vacProtectedTitle: 'VAC-beskyttelse aktiveret',
        vacProtectedDesc: 'Advarsel: Dette spil er beskyttet af Valve Anti-Cheat! Præstationsstyring er slået fra for at forhindre udelukkelse.',
        multiplayerBlockedTitle: 'Multiplayer-spil blokeret',
        multiplayerBlockedDesc: 'Som standard virker pluginet kun med singleplayer-spil. Du kan aktivere multiplayer i indstillingerne, når intet spil kører (på eget ansvar).',
        achievements: 'Præstationer',
        unlockAll: 'Lås alle op',
        lockAll: 'Lås alle',
        searchPlaceholder: 'Søg efter navn',
        filterStatus: 'Statusfilter',
        filterAll: 'Alle',
        filterUnlocked: 'Ulåste',
        filterLocked: 'Låste',
        playersUnlocked: '{percent}% af spillere',
        noAchievementsFound: 'Ingen præstationer fundet',
        noAchievementsForGame: 'Dette spil har ingen Steam-præstationer, eller statistik er utilgængelig.',
        toastUnlocked: 'Præstation "{name}" låst op!',
        toastLocked: 'Præstation "{name}" låst',
        toastUnlockAll: 'Alle præstationer låst op!',
        toastLockAll: 'Alle præstationer nulstillet',
        toastError: 'Fejl',
        allowMultiplayerLabel: 'Tillad for multiplayer-spil',
        allowMultiplayerDesc: 'Aktiverer understøttelse af spil med onlinetilstande (undtagen VAC)',
        multiplayerWarningRisk: 'Advarsel! Ændring af præstationer i multiplayer-spil kan føre til udelukkelse. Bruges på eget ansvar! VAC-spil forbliver blokerede.',
        nonSteamGameTitle: "Ikke-Steam-spil",
        nonSteamGameDesc: "Dette spil blev tilføjet som en ikke-Steam-genvej. Steam-præstationer understøttes kun for officielle spil fra Steam-butikken.",
        noAchievementsTitle: "Ingen præstationer",
        noAchievementsDesc: "Dette spil har ingen Steam-præstationer, eller statistikken er ikke tilgængelig.",
    },
    // 22. Норвежский (Norwegian)
    norwegian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Kontosikkerhet:',
        securityNotice: 'VAC-beskyttede spill (CS2, TF2 osv.) blokkeres automatisk. Ikke endre prestasjoner mens du spiller online.',
        gameSelection: 'Velg spill',
        activeGame: 'Aktivt spill',
        gameNotRunning: 'Ingen spill kjører',
        refreshGame: 'Oppdater aktivt spill',
        enterAppId: 'Angi spillets AppID',
        loadByAppId: 'Last inn med AppID',
        loading: 'Laster...',
        vacProtectedTitle: 'VAC-beskyttelse aktivert',
        vacProtectedDesc: 'Advarsel: Dette spillet er beskyttet av Valve Anti-Cheat! Prestasjonshåndtering er deaktivert for å unngå utestengelse.',
        multiplayerBlockedTitle: 'Flerspillerspill blokkert',
        multiplayerBlockedDesc: 'Som standard fungerer programtillegget kun med enspillerspill. Du kan aktivere flerspiller i innstillingene når ingen spill kjører (på egen risiko).',
        achievements: 'Prestasjoner',
        unlockAll: 'Lås opp alle',
        lockAll: 'Lås alle',
        searchPlaceholder: 'Søk etter navn',
        filterStatus: 'Statusfilter',
        filterAll: 'Alle',
        filterUnlocked: 'Ulåste',
        filterLocked: 'Låste',
        playersUnlocked: '{percent}% av spillere',
        noAchievementsFound: 'Ingen prestasjoner funnet',
        noAchievementsForGame: 'Dette spillet har ingen Steam-prestasjoner eller statistikk er utilgjengelig.',
        toastUnlocked: 'Prestasjon "{name}" låst opp!',
        toastLocked: 'Prestasjon "{name}" låst',
        toastUnlockAll: 'Alle prestasjoner låst opp!',
        toastLockAll: 'Alle prestasjoner tilbakestilt',
        toastError: 'Feil',
        allowMultiplayerLabel: 'Tillat for flerspillerspill',
        allowMultiplayerDesc: 'Aktiverer støtte for spill med nettmodus (unntatt VAC)',
        multiplayerWarningRisk: 'Advarsel! Endring av prestasjoner i flerspillerspill kan føre til utestengelse. Brukes på eget ansvar! VAC-spill forblir blokkert.',
        nonSteamGameTitle: "Ikke-Steam-spill",
        nonSteamGameDesc: "Dette spillet ble lagt til som en snarvei utenfor Steam. Steam-prestasjoner støttes bare for offisielle spill fra Steam-butikken.",
        noAchievementsTitle: "Ingen prestasjoner",
        noAchievementsDesc: "Dette spillet har ingen Steam-prestasjoner, eller statistikken er utilgjengelig.",
    },
    // 23. Финский (Finnish)
    finnish: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Tilin suojaus:',
        securityNotice: 'VAC-suojatut pelit (CS2, TF2 jne.) estetään automaattisesti. Älä muokkaa saavutuksia verkkopalvelimilla.',
        gameSelection: 'Pelin valinta',
        activeGame: 'Käynnissä oleva peli',
        gameNotRunning: 'Peli ei ole käynnissä',
        refreshGame: 'Päivitä nykyinen peli',
        enterAppId: 'Syötä pelin AppID',
        loadByAppId: 'Lataa AppID:llä',
        loading: 'Ladataan...',
        vacProtectedTitle: 'VAC-suojaus käytössä',
        vacProtectedDesc: 'Varoitus: Peli on Valve Anti-Cheatin suojaama! Saavutusten hallinta on estetty porttikiellon välttämiseksi.',
        multiplayerBlockedTitle: 'Moninpeli estetty',
        multiplayerBlockedDesc: 'Oletuksena lisäosa toimii vain yksinpelien kanssa. Voit sallia moninpelit asetuksista, kun peli ei ole käynnissä (omalla vastuullasi).',
        achievements: 'Saavutukset',
        unlockAll: 'Avaa kaikki',
        lockAll: 'Lukitse kaikki',
        searchPlaceholder: 'Hae nimellä',
        filterStatus: 'Tilan suodatin',
        filterAll: 'Kaikki',
        filterUnlocked: 'Avatut',
        filterLocked: 'Lukitut',
        playersUnlocked: '{percent}% pelaajista',
        noAchievementsFound: 'Saavutuksia ei löytynyt',
        noAchievementsForGame: 'Tällä pelillä ei ole Steam-saavutuksia tai tilastot eivät ole saatavilla.',
        toastUnlocked: 'Saavutus "{name}" avattu!',
        toastLocked: 'Saavutus "{name}" lukittu',
        toastUnlockAll: 'Kaikki saavutukset avattu!',
        toastLockAll: 'Kaikki saavutukset nollattu',
        toastError: 'Virhe',
        allowMultiplayerLabel: 'Salli moninpelit',
        allowMultiplayerDesc: 'Ottaa käyttöön tuen verkkomoninpeleille (paitsi VAC)',
        multiplayerWarningRisk: 'Varoitus! Saavutusten muokkaaminen moninpeleissä voi johtaa porttikieltoon. Käytä omalla vastuulla! VAC-pelit pysyvät estettyinä.',
        nonSteamGameTitle: "Muu kuin Steam-peli",
        nonSteamGameDesc: "Tämä peli lisättiin muuna kuin Steam-pikakuvakkeena. Steam-saavutukset ovat saatavilla vain virallisille Steam-kaupan peleille.",
        noAchievementsTitle: "Ei saavutuksia",
        noAchievementsDesc: "Tämä peli ei sisällä Steam-saavutuksia tai tilastotietoja ei ole saatavilla.",
    },
    // 24. Греческий (Greek)
    greek: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Ασφάλεια λογαριασμού:',
        securityNotice: 'Τα παιχνίδια με προστασία VAC (CS2, TF2 κ.λπ.) αποκλείονται αυτόματα. Μην τροποποιείτε επιτεύγματα ενώ παίζετε online.',
        gameSelection: 'Επιλογή παιχνιδιού',
        activeGame: 'Ενεργό παιχνίδι',
        gameNotRunning: 'Κανένα παιχνίδι σε εκτέλεση',
        refreshGame: 'Ανανέωση τρέχοντος παιχνιδιού',
        enterAppId: 'Εισαγωγή AppID παιχνιδιού',
        loadByAppId: 'Φόρτωση βάσει AppID',
        loading: 'Φόρτωση...',
        vacProtectedTitle: 'Προστασία VAC ενεργή',
        vacProtectedDesc: 'Προσοχή: Αυτό το παιχνίδι προστατεύεται από το Valve Anti-Cheat! Η διαχείριση επιτευγμάτων έχει απενεργοποιηθεί.',
        multiplayerBlockedTitle: 'Παιχνίδι πολλών παικτών αποκλείστηκε',
        multiplayerBlockedDesc: 'Από προεπιλογή, το πρόσθετο λειτουργεί μόνο με παιχνίδια μονού παίκτη. Μπορείτε να ενεργοποιήσετε το multiplayer στις ρυθμίσεις όταν δεν εκτελείται παιχνίδι (με δική σας ευθύνη).',
        achievements: 'Επιτεύγματα',
        unlockAll: 'Ξεκλείδωμα όλων',
        lockAll: 'Κλείδωμα όλων',
        searchPlaceholder: 'Αναζήτηση βάσει τίτλου',
        filterStatus: 'Φίλτρο κατάστασης',
        filterAll: 'Όλα',
        filterUnlocked: 'Ξεκλείδωτα',
        filterLocked: 'Κλειδωμένα',
        playersUnlocked: '{percent}% των παικτών',
        noAchievementsFound: 'Δεν βρέθηκαν επιτεύγματα',
        noAchievementsForGame: 'Αυτό το παιχνίδι δεν διαθέτει επιτεύγματα Steam.',
        toastUnlocked: 'Το επίτευγμα "{name}" ξεκλειδώθηκε!',
        toastLocked: 'Το επίτευγμα "{name}" κλειδώθηκε',
        toastUnlockAll: 'Όλα τα επιτεύγματα ξεκλειδώθηκαν!',
        toastLockAll: 'Όλα τα επιτεύγματα επαναφέρθηκαν',
        toastError: 'Σφάλμα',
        allowMultiplayerLabel: 'Να επιτρέπεται σε παιχνίδια πολλών παικτών',
        allowMultiplayerDesc: 'Ενεργοποιεί υποστήριξη για παιχνίδια με λειτουργία online (εκτός VAC)',
        multiplayerWarningRisk: 'Προσοχή! Η τροποποίηση επιτευγμάτων σε παιχνίδια multiplayer μπορεί να προκαλέσει αποκλεισμό (ban). Χρησιμοποιήστε με δική σας ευθύνη! Τα παιχνίδια VAC παραμένουν αποκλεισμένα.',
        nonSteamGameTitle: "Παιχνίδι εκτός Steam",
        nonSteamGameDesc: "Αυτό το παιχνίδι προστέθηκε ως συντόμευση εκτός Steam. Τα επιτεύγματα Steam υποστηρίζονται μόνο για επίσημα παιχνίδια του καταστήματος Steam.",
        noAchievementsTitle: "Δεν υπάρχουν επιτεύγματα",
        noAchievementsDesc: "Αυτό το παιχνίδι δεν διαθέτει επιτεύγματα Steam ή τα στατιστικά δεν είναι διαθέσιμα.",
    },
    // 25. Болгарский (Bulgarian)
    bulgarian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Сигурност на акаунта:',
        securityNotice: 'Игрите със защита VAC (CS2, TF2 и др.) се блокират автоматично. Не променяйте постижения на онлайн сървъри.',
        gameSelection: 'Избор на игра',
        activeGame: 'Активна игра',
        gameNotRunning: 'Няма стартирана игра',
        refreshGame: 'Опресняване на текущата игра',
        enterAppId: 'Въведете AppID на играта',
        loadByAppId: 'Зареждане по AppID',
        loading: 'Зареждане...',
        vacProtectedTitle: 'Защитата VAC е активирана',
        vacProtectedDesc: 'Внимание: Тази игра е защитена от Valve Anti-Cheat! Управлението на постижения е деактивирано за избягване на бан.',
        multiplayerBlockedTitle: 'Мултиплейър играта е блокирана',
        multiplayerBlockedDesc: 'По подразбиране плъгинът работи само с игри за един играч. Можете да разрешите мултиплейър в настройките, когато няма стартирана игра (на свой собствен риск).',
        achievements: 'Постижения',
        unlockAll: 'Отключване на всички',
        lockAll: 'Заключване на всички',
        searchPlaceholder: 'Търсене по име',
        filterStatus: 'Филтър за статус',
        filterAll: 'Всички',
        filterUnlocked: 'Отключени',
        filterLocked: 'Заключени',
        playersUnlocked: 'При {percent}% от играчите',
        noAchievementsFound: 'Не са намерени постижения',
        noAchievementsForGame: 'Тази игра няма Steam постижения или статистиката е недостъпна.',
        toastUnlocked: 'Постижението "{name}" е отключено!',
        toastLocked: 'Постижението "{name}" е заключено',
        toastUnlockAll: 'Всички постижения са отключени!',
        toastLockAll: 'Всички постижения са нулирани',
        toastError: 'Грешка',
        allowMultiplayerLabel: 'Разрешаване за мултиплейър игри',
        allowMultiplayerDesc: 'Активира поддръжка за игри с онлайн режим (освен VAC)',
        multiplayerWarningRisk: 'Внимание! Промяната на постижения в мултиплейър игри може да доведе до бан. Използвайте на свой собствен риск! Игрите с VAC остават блокирани.',
        nonSteamGameTitle: "Игра извън Steam",
        nonSteamGameDesc: "Тази игра е добавена като пряк път извън Steam. Постиженията в Steam са налични само за официални игри от магазина на Steam.",
        noAchievementsTitle: "Няма постижения",
        noAchievementsDesc: "Тази игра няма постижения в Steam или статистическите данни не са налични.",
    },
    // 26. Румынский (Romanian)
    romanian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Securitatea contului:',
        securityNotice: 'Jocurile protejate de VAC (CS2, TF2 etc.) sunt blocate automat. Nu modifica realizările în timp ce joci online.',
        gameSelection: 'Selectarea jocului',
        activeGame: 'Joc activ',
        gameNotRunning: 'Niciun joc pornit',
        refreshGame: 'Reîmprospătează jocul curent',
        enterAppId: 'Introduceți AppID-ul jocului',
        loadByAppId: 'Încarcă după AppID',
        loading: 'Se încarcă...',
        vacProtectedTitle: 'Protecție VAC activată',
        vacProtectedDesc: 'Atenție: Acest joc este protejat de Valve Anti-Cheat! Gestionarea realizărilor este dezactivată pentru a preveni banarea.',
        multiplayerBlockedTitle: 'Joc multiplayer blocat',
        multiplayerBlockedDesc: 'În mod implicit, pluginul funcționează doar cu jocuri singleplayer. Puteți activa suportul multiplayer în setări când nu rulează niciun joc (pe propriul risc).',
        achievements: 'Realizări',
        unlockAll: 'Deblochează toate',
        lockAll: 'Blochează toate',
        searchPlaceholder: 'Caută după titlu',
        filterStatus: 'Filtru status',
        filterAll: 'Toate',
        filterUnlocked: 'Deblocate',
        filterLocked: 'Blocate',
        playersUnlocked: '{percent}% dintre jucători',
        noAchievementsFound: 'Nu au fost găsite realizări',
        noAchievementsForGame: 'Acest joc nu are realizări Steam sau statisticile sunt indisponibile.',
        toastUnlocked: 'Realizarea "{name}" a fost deblocată!',
        toastLocked: 'Realizarea "{name}" a fost blocată',
        toastUnlockAll: 'Toate realizările au fost deblocate!',
        toastLockAll: 'Toate realizările au fost resetate',
        toastError: 'Eroare',
        allowMultiplayerLabel: 'Permite pentru jocuri multiplayer',
        allowMultiplayerDesc: 'Activează suportul pentru jocuri cu mod online (cu excepția VAC)',
        multiplayerWarningRisk: 'Atenție! Modificarea realizărilor în jocurile multiplayer poate duce la ban. Folosiți pe propriul risc! Jocurile VAC rămân blocate.',
        nonSteamGameTitle: "Joc non-Steam",
        nonSteamGameDesc: "Acest joc a fost adăugat ca o scurtătură non-Steam. Realizările Steam sunt disponibile numai pentru jocurile oficiale din magazinul Steam.",
        noAchievementsTitle: "Fără realizări",
        noAchievementsDesc: "Acest joc nu conține realizări Steam sau statisticile nu sunt disponibile.",
    },
    // 27. Тайский (Thai)
    thai: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'ความปลอดภัยของบัญชี:',
        securityNotice: 'เกมที่ป้องกันด้วย VAC (CS2, TF2 ฯลฯ) จะถูกบล็อกโดยอัตโนมัติ อย่าแก้ไขความสำเร็จขณะออนไลน์บนเซิร์ฟเวอร์',
        gameSelection: 'เลือกเกม',
        activeGame: 'เกมที่เปิดอยู่',
        gameNotRunning: 'ไม่มีเกมที่ทำงานอยู่',
        refreshGame: 'รีเฟรชเกมปัจจุบัน',
        enterAppId: 'ป้อน AppID ของเกม',
        loadByAppId: 'โหลดด้วย AppID',
        loading: 'กำลังโหลด...',
        vacProtectedTitle: 'เปิดใช้งานการป้องกัน VAC',
        vacProtectedDesc: 'คำเตือน: เกมนี้ได้รับการป้องกันโดย Valve Anti-Cheat! ปิดการจัดการความสำเร็จเพื่อป้องกันการถูกแบน',
        multiplayerBlockedTitle: 'เกมผู้เล่นหลายคนถูกบล็อก',
        multiplayerBlockedDesc: 'โดยค่าเริ่มต้น ปลั๊กอินนี้ใช้งานได้เฉพาะกับเกมเล่นคนเดียวเท่านั้น คุณสามารถเปิดใช้งานโหมดผู้เล่นหลายคนได้ในการตั้งค่าเมื่อไม่ได้เปิดเกม (ยอมรับความเสี่ยงเอง)',
        achievements: 'ความสำเร็จ',
        unlockAll: 'ปลดล็อกทั้งหมด',
        lockAll: 'ล็อกทั้งหมด',
        searchPlaceholder: 'ค้นหาตามชื่อ',
        filterStatus: 'ตัวกรองสถานะ',
        filterAll: 'ทั้งหมด',
        filterUnlocked: 'ปลดล็อกแล้ว',
        filterLocked: 'ล็อกอยู่',
        playersUnlocked: '{percent}% ของผู้เล่น',
        noAchievementsFound: 'ไม่พบความสำเร็จ',
        noAchievementsForGame: 'เกมนี้ไม่มีความสำเร็จของ Steam หรือสถิติไม่พร้อมใช้งาน',
        toastUnlocked: 'ปลดล็อกความสำเร็จ "{name}" แล้ว!',
        toastLocked: 'ล็อกความสำเร็จ "{name}" แล้ว',
        toastUnlockAll: 'ปลดล็อกความสำเร็จทั้งหมดแล้ว!',
        toastLockAll: 'รีเซ็ตความสำเร็จทั้งหมดแล้ว',
        toastError: 'ข้อผิดพลาด',
        allowMultiplayerLabel: 'อนุญาตสำหรับเกมผู้เล่นหลายคน',
        allowMultiplayerDesc: 'เปิดใช้งานการรองรับเกมที่มีโหมดออนไลน์/ผู้เล่นหลายคน (ยกเว้น VAC)',
        multiplayerWarningRisk: 'คำเตือน! การแก้ไขความสำเร็จในเกมผู้เล่นหลายคนอาจส่งผลให้ถูกแบนจากผู้พัฒนาเกมหรือระบบป้องกันการโกง คุณต้องยอมรับความเสี่ยงเอง! เกมที่มี VAC จะยังคงถูกบล็อกอย่างถาวร',
        nonSteamGameTitle: "เกมนอก Steam",
        nonSteamGameDesc: "เกมนี้ถูกเพิ่มเป็นทางลัดนอก Steam ความสำเร็จ Steam รองรับเฉพาะเกมอย่างเป็นทางการจากร้านค้า Steam เท่านั้น",
        noAchievementsTitle: "ไม่พบความสำเร็จ",
        noAchievementsDesc: "เกมนี้ไม่มีความสำเร็จ Steam หรือข้อมูลสถิติไม่พร้อมใช้งาน",
    },
    // 28. Вьетнамский (Vietnamese)
    vietnamese: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Bảo mật tài khoản:',
        securityNotice: 'Các trò chơi có VAC (CS2, TF2, v.v.) sẽ tự động bị chặn. Không sửa đổi thành tích khi đang chơi trực tuyến.',
        gameSelection: 'Chọn trò chơi',
        activeGame: 'Trò chơi đang chạy',
        gameNotRunning: 'Không có trò chơi nào đang chạy',
        refreshGame: 'Làm mới trò chơi hiện tại',
        enterAppId: 'Nhập AppID của trò chơi',
        loadByAppId: 'Tải theo AppID',
        loading: 'Đang tải...',
        vacProtectedTitle: 'Bảo vệ VAC đã bật',
        vacProtectedDesc: 'Cảnh báo: Trò chơi này được bảo vệ bởi Valve Anti-Cheat! Tính năng quản lý thành tích bị vô hiệu hóa để tránh bị khóa tài khoản.',
        multiplayerBlockedTitle: 'Trò chơi nhiều người chơi bị chặn',
        multiplayerBlockedDesc: 'Theo mặc định, plugin chỉ hoạt động với trò chơi chơi đơn. Bạn có thể bật hỗ trợ nhiều người chơi trong phần cài đặt khi không có trò chơi nào đang chạy (tự chịu rủi ro).',
        achievements: 'Thành tích',
        unlockAll: 'Mở khóa tất cả',
        lockAll: 'Khóa tất cả',
        searchPlaceholder: 'Tìm kiếm theo tên',
        filterStatus: 'Lọc trạng thái',
        filterAll: 'Tất cả',
        filterUnlocked: 'Đã mở khóa',
        filterLocked: 'Đã khóa',
        playersUnlocked: '{percent}% người chơi',
        noAchievementsFound: 'Không tìm thấy thành tích',
        noAchievementsForGame: 'Trò chơi này không có thành tích Steam hoặc dữ liệu không khả dụng.',
        toastUnlocked: 'Đã mở khóa thành tích "{name}"!',
        toastLocked: 'Đã khóa thành tích "{name}"',
        toastUnlockAll: 'Đã mở khóa tất cả thành tích!',
        toastLockAll: 'Đã đặt lại tất cả thành tích',
        toastError: 'Lỗi',
        allowMultiplayerLabel: 'Cho phép với trò chơi nhiều người chơi',
        allowMultiplayerDesc: 'Bật hỗ trợ cho trò chơi có chế độ trực tuyến (ngoại trừ VAC)',
        multiplayerWarningRisk: 'Cảnh báo! Sửa đổi thành tích trong các trò chơi nhiều người chơi có thể dẫn đến việc bị cấm bởi nhà phát triển hoặc hệ thống chống gian lận. Bạn tự chịu rủi ro! Các trò chơi có VAC vẫn sẽ bị chặn vĩnh viễn.',
        nonSteamGameTitle: "Trò chơi ngoài Steam",
        nonSteamGameDesc: "Trò chơi này được thêm dưới dạng lối tắt ngoài Steam. Thành tích Steam chỉ được hỗ trợ cho các trò chơi chính thức từ cửa hàng Steam.",
        noAchievementsTitle: "Không có thành tích",
        noAchievementsDesc: "Trò chơi này không có thành tích Steam nào hoặc dữ liệu thống kê không khả dụng.",
    },
    // 29. Индонезийский (Indonesian)
    indonesian: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Keamanan Akun:',
        securityNotice: 'Game yang dilindungi VAC (CS2, TF2, dll.) diblokir secara otomatis. Jangan ubah pencapaian saat terhubung ke server online.',
        gameSelection: 'Pilihan Game',
        activeGame: 'Game Aktif',
        gameNotRunning: 'Tidak ada game yang berjalan',
        refreshGame: 'Segarkan game saat ini',
        enterAppId: 'Masukkan AppID game',
        loadByAppId: 'Muat berdasarkan AppID',
        loading: 'Memuat...',
        vacProtectedTitle: 'Perlindungan VAC Aktif',
        vacProtectedDesc: 'Peringatan: Game ini dilindungi oleh Valve Anti-Cheat! Pengelolaan pencapaian dinonaktifkan untuk mencegah pemblokiran akun.',
        multiplayerBlockedTitle: 'Game Multipemain Diblokir',
        multiplayerBlockedDesc: 'Secara default, plugin ini hanya berfungsi dengan game pemain tunggal. Anda dapat mengaktifkan multipemain di pengaturan saat tidak ada game yang berjalan (risiko sendiri).',
        achievements: 'Pencapaian',
        unlockAll: 'Buka Semua',
        lockAll: 'Kunci Semua',
        searchPlaceholder: 'Cari berdasarkan judul',
        filterStatus: 'Filter Status',
        filterAll: 'Semua',
        filterUnlocked: 'Terbuka',
        filterLocked: 'Terkunci',
        playersUnlocked: '{percent}% pemain',
        noAchievementsFound: 'Pencapaian tidak ditemukan',
        noAchievementsForGame: 'Game ini tidak memiliki pencapaian Steam atau statistik tidak tersedia.',
        toastUnlocked: 'Pencapaian "{name}" terbuka!',
        toastLocked: 'Pencapaian "{name}" terkunci',
        toastUnlockAll: 'Semua pencapaian berhasil dibuka!',
        toastLockAll: 'Semua pencapaian disetel ulang',
        toastError: 'Kesalahan',
        allowMultiplayerLabel: 'Izinkan untuk game multipemain',
        allowMultiplayerDesc: 'Mengaktifkan dukungan untuk game dengan mode online (kecuali VAC)',
        multiplayerWarningRisk: 'Peringatan! Mengubah pencapaian dalam game multipemain dapat menyebabkan pemblokiran akun oleh pengembang atau anti-cheat. Gunakan dengan risiko Anda sendiri! Game VAC akan tetap diblokir.',
        nonSteamGameTitle: "Game Non-Steam",
        nonSteamGameDesc: "Game ini ditambahkan sebagai pintasan non-Steam. Pencapaian Steam hanya didukung untuk game resmi dari toko Steam.",
        noAchievementsTitle: "Tidak Ada Pencapaian",
        noAchievementsDesc: "Game ini tidak memiliki pencapaian Steam atau data statistik tidak tersedia.",
    },
    // 30. Малайский (Malay)
    malay: {
        title: 'Steam Achievement Manager',
        accountSecurity: 'Keselamatan Akaun:',
        securityNotice: 'Permainan yang dilindungi VAC (CS2, TF2, dll.) disekat secara automatik. Jangan ubah pencapaian semasa berada di pelayan dalam talian.',
        gameSelection: 'Pilihan Permainan',
        activeGame: 'Permainan Aktif',
        gameNotRunning: 'Tiada permainan sedang berjalan',
        refreshGame: 'Segarkan permainan semasa',
        enterAppId: 'Masukkan AppID permainan',
        loadByAppId: 'Muat mengikut AppID',
        loading: 'Memuatkan...',
        vacProtectedTitle: 'Perlindungan VAC Diaktifkan',
        vacProtectedDesc: 'Amaran: Permainan ini dilindungi oleh Valve Anti-Cheat! Pengurusan pencapaian dilumpuhkan untuk mengelakkan sekatan akaun.',
        multiplayerBlockedTitle: 'Permainan Berbilang Pemain Disekat',
        multiplayerBlockedDesc: 'Secara lalai, pemalam ini hanya berfungsi dengan permainan pemain tunggal. Anda boleh membenarkan berbilang pemain dalam tetapan apabila tiada permainan dijalankan (atas risiko sendiri).',
        achievements: 'Pencapaian',
        unlockAll: 'Buka Semua',
        lockAll: 'Kunci Semua',
        searchPlaceholder: 'Cari mengikut nama',
        filterStatus: 'Penapis Status',
        filterAll: 'Semua',
        filterUnlocked: 'Dibuka',
        filterLocked: 'Dikunci',
        playersUnlocked: '{percent}% pemain',
        noAchievementsFound: 'Tiada pencapaian dijumpai',
        noAchievementsForGame: 'Permainan ini tidak mempunyai pencapaian Steam atau statistik tidak tersedia.',
        toastUnlocked: 'Pencapaian "{name}" dibuka!',
        toastLocked: 'Pencapaian "{name}" dikunci',
        toastUnlockAll: 'Semua pencapaian telah dibuka!',
        toastLockAll: 'Semua pencapaian telah ditetapkan semula',
        toastError: 'Ralat',
        allowMultiplayerLabel: 'Benarkan untuk permainan berbilang pemain',
        allowMultiplayerDesc: 'Mengaktifkan sokongan untuk permainan dengan mod dalam talian (kecuali VAC)',
        multiplayerWarningRisk: 'Amaran! Mengubah pencapaian dalam permainan berbilang pemain boleh menyebabkan sekatan oleh pembangun atau anti-cheat. Gunakan atas risiko sendiri! Permainan VAC tetap disekat.',
        nonSteamGameTitle: "Permainan Bukan Steam",
        nonSteamGameDesc: "Permainan ini ditambah sebagai pintasan bukan Steam. Pencapaian Steam hanya disokong untuk permainan rasmi dari gedung Steam.",
        noAchievementsTitle: "Tiada Pencapaian",
        noAchievementsDesc: "Permainan ini tidak mengandungi sebarang pencapaian Steam atau statistik tidak tersedia.",
    },
};
function getTranslations(lang = 'english') {
    const normalized = lang ? lang.toLowerCase() : 'english';
    return translations[normalized] || translations.english;
}

// Связывание с методами Python бэкенда через @decky/api callable
const getSystemLanguageCall = callable('get_system_language');
const getAchievementsCall = callable('get_achievements');
const unlockAchievementCall = callable('unlock_achievement');
const lockAchievementCall = callable('lock_achievement');
const unlockAllCall = callable('unlock_all');
const lockAllCall = callable('lock_all');
const Content = () => {
    const [currentAppId, setCurrentAppId] = SP_REACT.useState(null);
    const [currentAppName, setCurrentAppName] = SP_REACT.useState('');
    const [manualAppId, setManualAppId] = SP_REACT.useState('');
    const [loading, setLoading] = SP_REACT.useState(false);
    const [errorMsg, setErrorMsg] = SP_REACT.useState(null);
    const [isVacProtected, setIsVacProtected] = SP_REACT.useState(false);
    const [isMultiplayerBlocked, setIsMultiplayerBlocked] = SP_REACT.useState(false);
    const [isNonSteamGame, setIsNonSteamGame] = SP_REACT.useState(false);
    const [hasNoAchievements, setHasNoAchievements] = SP_REACT.useState(false);
    // Настройка: разрешить для мультиплеерных игр (по умолчанию выключено)
    const [allowMultiplayer, setAllowMultiplayer] = SP_REACT.useState(false);
    // Язык интерфейса и схемы
    const [currentLanguage, setCurrentLanguage] = SP_REACT.useState('english');
    const [achievements, setAchievements] = SP_REACT.useState([]);
    const [searchQuery, setSearchQuery] = SP_REACT.useState('');
    const [filterMode, setFilterMode] = SP_REACT.useState('all');
    const [actionInProgress, setActionInProgress] = SP_REACT.useState(null);
    // Получаем словарь локализации для текущего языка
    const t = SP_REACT.useMemo(() => getTranslations(currentLanguage), [currentLanguage]);
    // Загружаем язык системы Steam при инициализации
    SP_REACT.useEffect(() => {
        (async () => {
            try {
                const res = await getSystemLanguageCall();
                if (res && res.language) {
                    setCurrentLanguage(res.language);
                }
            }
            catch (e) {
                console.error('[SAM] Error getting system language:', e);
            }
        })();
    }, []);
    // Определение текущей активной игры при открытии QAM
    const detectRunningApp = () => {
        try {
            const runningApp = DFL.Router.MainRunningApp;
            if (runningApp && runningApp.appid) {
                const id = parseInt(runningApp.appid, 10);
                if (!isNaN(id) && id > 0) {
                    setCurrentAppId(id);
                    setCurrentAppName(runningApp.display_name || `App ${id}`);
                    return;
                }
            }
        }
        catch (e) {
            console.error('[SAM] Router.MainRunningApp detection error:', e);
        }
    };
    SP_REACT.useEffect(() => {
        detectRunningApp();
    }, []);
    // Загрузка ачивок при смене AppId, разрешения мультиплеера или языка
    SP_REACT.useEffect(() => {
        if (!currentAppId)
            return;
        let isMounted = true;
        (async () => {
            setLoading(true);
            setErrorMsg(null);
            setIsVacProtected(false);
            setIsMultiplayerBlocked(false);
            setIsNonSteamGame(false);
            setHasNoAchievements(false);
            setAchievements([]);
            try {
                const result = await getAchievementsCall(currentAppId, allowMultiplayer, currentLanguage);
                if (!isMounted)
                    return;
                if (result && result.success) {
                    const list = result.achievements || [];
                    setAchievements(list);
                    setIsVacProtected(false);
                    setIsMultiplayerBlocked(false);
                    setIsNonSteamGame(false);
                    if (list.length === 0) {
                        setHasNoAchievements(true);
                    }
                    else {
                        setHasNoAchievements(false);
                    }
                }
                else {
                    if (result?.is_vac) {
                        setIsVacProtected(true);
                        setErrorMsg(t.vacProtectedDesc);
                    }
                    else if (result?.is_multiplayer && !allowMultiplayer) {
                        setIsMultiplayerBlocked(true);
                        setErrorMsg(t.multiplayerBlockedDesc);
                    }
                    else if (result?.error === 'NON_STEAM_GAME') {
                        setIsNonSteamGame(true);
                    }
                    else if (result?.error === 'NO_ACHIEVEMENTS') {
                        setHasNoAchievements(true);
                    }
                    else {
                        setErrorMsg(result?.error || t.toastError);
                    }
                }
            }
            catch (err) {
                if (!isMounted)
                    return;
                setErrorMsg(err.message || 'Backend call error');
            }
            finally {
                if (isMounted)
                    setLoading(false);
            }
        })();
        return () => {
            isMounted = false;
        };
    }, [currentAppId, allowMultiplayer, currentLanguage, t]);
    // Разблокировать / Заблокировать одно достижение
    const handleToggleAchievement = async (ach) => {
        if (isVacProtected || (isMultiplayerBlocked && !allowMultiplayer) || actionInProgress)
            return;
        setActionInProgress(ach.id);
        try {
            if (ach.is_achieved) {
                const result = await lockAchievementCall(currentAppId, ach.id, allowMultiplayer);
                if (result && result.success) {
                    setAchievements((prev) => prev.map((item) => (item.id === ach.id ? { ...item, is_achieved: false } : item)));
                    toaster.toast({
                        title: 'SAM',
                        body: t.toastLocked.replace('{name}', ach.name),
                        duration: 2000,
                    });
                }
                else {
                    toaster.toast({
                        title: t.toastError,
                        body: result?.error || t.toastError,
                        duration: 3500,
                    });
                }
            }
            else {
                const result = await unlockAchievementCall(currentAppId, ach.id, allowMultiplayer);
                if (result && result.success) {
                    setAchievements((prev) => prev.map((item) => (item.id === ach.id ? { ...item, is_achieved: true } : item)));
                    toaster.toast({
                        title: 'SAM',
                        body: t.toastUnlocked.replace('{name}', ach.name),
                        duration: 2000,
                    });
                }
                else {
                    toaster.toast({
                        title: t.toastError,
                        body: result?.error || t.toastError,
                        duration: 3500,
                    });
                }
            }
        }
        finally {
            setActionInProgress(null);
        }
    };
    // Разблокировать все
    const handleUnlockAll = async () => {
        if (!currentAppId || isVacProtected || (isMultiplayerBlocked && !allowMultiplayer) || actionInProgress)
            return;
        setActionInProgress('all');
        try {
            const result = await unlockAllCall(currentAppId, allowMultiplayer);
            if (result && result.success) {
                setAchievements((prev) => prev.map((item) => ({ ...item, is_achieved: true })));
                toaster.toast({
                    title: 'SAM',
                    body: t.toastUnlockAll,
                    duration: 2500,
                });
            }
            else {
                toaster.toast({
                    title: t.toastError,
                    body: result?.error || t.toastError,
                    duration: 3500,
                });
            }
        }
        finally {
            setActionInProgress(null);
        }
    };
    // Сбросить все
    const handleLockAll = async () => {
        if (!currentAppId || isVacProtected || (isMultiplayerBlocked && !allowMultiplayer) || actionInProgress)
            return;
        setActionInProgress('all');
        try {
            const result = await lockAllCall(currentAppId, allowMultiplayer);
            if (result && result.success) {
                setAchievements((prev) => prev.map((item) => ({ ...item, is_achieved: false })));
                toaster.toast({
                    title: 'SAM',
                    body: t.toastLockAll,
                    duration: 2500,
                });
            }
            else {
                toaster.toast({
                    title: t.toastError,
                    body: result?.error || t.toastError,
                    duration: 3500,
                });
            }
        }
        finally {
            setActionInProgress(null);
        }
    };
    // Фильтрация достижений по поиску и статусу
    const filteredAchievements = SP_REACT.useMemo(() => {
        return achievements.filter((item) => {
            if (filterMode === 'unlocked' && !item.is_achieved)
                return false;
            if (filterMode === 'locked' && item.is_achieved)
                return false;
            if (searchQuery.trim().length > 0) {
                const query = searchQuery.toLowerCase();
                return (item.name.toLowerCase().includes(query) ||
                    item.description?.toLowerCase().includes(query) ||
                    item.id.toLowerCase().includes(query));
            }
            return true;
        });
    }, [achievements, filterMode, searchQuery]);
    const unlockedCount = SP_REACT.useMemo(() => achievements.filter((a) => a.is_achieved).length, [achievements]);
    // Флаг: запущена ли игра прямо сейчас
    const isGameRunning = Boolean(currentAppName && currentAppId);
    return (SP_JSX.jsxs("div", { children: [SP_JSX.jsxs(DFL.PanelSection, { children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                                width: '100%',
                                padding: '8px 10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                borderRadius: '6px',
                                boxSizing: 'border-box',
                            }, children: [SP_JSX.jsx("div", { style: { fontSize: '11px', color: '#8a9aa8', textTransform: 'uppercase', letterSpacing: '0.5px' }, children: t.activeGame }), SP_JSX.jsx("div", { style: {
                                        fontSize: '13px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        marginTop: '2px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }, children: currentAppName ? `${currentAppName} (ID: ${currentAppId})` : t.gameNotRunning })] }) }), !isGameRunning && (SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.TextField, { label: t.enterAppId, value: manualAppId, onChange: (e) => setManualAppId(e.target.value) }) })), !isGameRunning && manualAppId.trim().length > 0 && (SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                                const parsed = parseInt(manualAppId.trim(), 10);
                                if (!isNaN(parsed) && parsed > 0) {
                                    setCurrentAppId(parsed);
                                    setCurrentAppName(`App ${parsed}`);
                                }
                            }, children: t.loadByAppId }) }))] }), loading && (SP_JSX.jsx(DFL.PanelSection, { children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx("div", { style: { display: 'flex', justifyContent: 'center', padding: '16px' }, children: SP_JSX.jsx(DFL.SteamSpinner, {}) }) }) })), isVacProtected && (SP_JSX.jsx(DFL.PanelSection, { title: t.vacProtectedTitle, children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                            padding: '10px 12px',
                            backgroundColor: 'rgba(231, 76, 60, 0.15)',
                            borderRadius: '6px',
                            border: '1px solid #e74c3c',
                            color: '#ff7675',
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                        }, children: [SP_JSX.jsx(FaExclamationTriangle, { style: { fontSize: '20px', minWidth: '20px' } }), SP_JSX.jsxs("div", { style: { fontSize: '11px', lineHeight: '1.4' }, children: [SP_JSX.jsx("b", { children: t.vacProtectedTitle }), SP_JSX.jsx("br", {}), t.vacProtectedDesc] })] }) }) })), isMultiplayerBlocked && !allowMultiplayer && !isVacProtected && (SP_JSX.jsx(DFL.PanelSection, { title: t.multiplayerBlockedTitle, children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                            padding: '10px 12px',
                            backgroundColor: 'rgba(230, 126, 34, 0.15)',
                            borderRadius: '6px',
                            border: '1px solid #e67e22',
                            color: '#f39c12',
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                        }, children: [SP_JSX.jsx(FaExclamationTriangle, { style: { fontSize: '20px', minWidth: '20px' } }), SP_JSX.jsxs("div", { style: { fontSize: '11px', lineHeight: '1.4', color: '#ecf0f1' }, children: [SP_JSX.jsx("b", { style: { color: '#e67e22' }, children: t.multiplayerBlockedTitle }), SP_JSX.jsx("br", {}), t.multiplayerBlockedDesc] })] }) }) })), isNonSteamGame && !loading && (SP_JSX.jsx(DFL.PanelSection, { title: t.nonSteamGameTitle, children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                            padding: '10px 12px',
                            backgroundColor: 'rgba(52, 152, 219, 0.15)',
                            borderRadius: '6px',
                            border: '1px solid #3498db',
                            color: '#74b9ff',
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                        }, children: [SP_JSX.jsx(FaInfoCircle, { style: { fontSize: '20px', minWidth: '20px', color: '#3498db' } }), SP_JSX.jsxs("div", { style: { fontSize: '11px', lineHeight: '1.4', color: '#ecf0f1' }, children: [SP_JSX.jsx("b", { style: { color: '#3498db' }, children: t.nonSteamGameTitle }), SP_JSX.jsx("br", {}), t.nonSteamGameDesc] })] }) }) })), hasNoAchievements && !isNonSteamGame && !isVacProtected && !loading && (SP_JSX.jsx(DFL.PanelSection, { title: t.noAchievementsTitle, children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                            padding: '10px 12px',
                            backgroundColor: 'rgba(149, 165, 166, 0.15)',
                            borderRadius: '6px',
                            border: '1px solid #7f8c8d',
                            color: '#bdc3c7',
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                        }, children: [SP_JSX.jsx(FaInfoCircle, { style: { fontSize: '20px', minWidth: '20px', color: '#bdc3c7' } }), SP_JSX.jsxs("div", { style: { fontSize: '11px', lineHeight: '1.4', color: '#ecf0f1' }, children: [SP_JSX.jsx("b", { style: { color: '#ecf0f1' }, children: t.noAchievementsTitle }), SP_JSX.jsx("br", {}), t.noAchievementsDesc] })] }) }) })), errorMsg && !isVacProtected && !isNonSteamGame && !hasNoAchievements && (!isMultiplayerBlocked || allowMultiplayer) && (SP_JSX.jsx(DFL.PanelSection, { children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx("div", { style: {
                            color: '#e74c3c',
                            fontSize: '11px',
                            padding: '8px',
                            backgroundColor: 'rgba(231, 76, 60, 0.1)',
                            borderRadius: '4px',
                        }, children: errorMsg }) }) })), !loading && !isVacProtected && (!isMultiplayerBlocked || allowMultiplayer) && achievements.length > 0 && (SP_JSX.jsxs(DFL.PanelSection, { title: `${t.achievements} (${unlockedCount} / ${achievements.length})`, children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: actionInProgress !== null, onClick: handleUnlockAll, children: SP_JSX.jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }, children: [SP_JSX.jsx(FaUnlock, {}), " ", t.unlockAll] }) }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: actionInProgress !== null, onClick: handleLockAll, children: SP_JSX.jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }, children: [SP_JSX.jsx(FaLock, {}), " ", t.lockAll] }) }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.TextField, { label: t.searchPlaceholder, value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.DropdownItem, { label: t.filterStatus, selectedOption: filterMode, onChange: (val) => setFilterMode(val.data), rgOptions: [
                                { data: 'all', label: `${t.filterAll} (${achievements.length})` },
                                { data: 'unlocked', label: `${t.filterUnlocked} (${unlockedCount})` },
                                { data: 'locked', label: `${t.filterLocked} (${achievements.length - unlockedCount})` },
                            ] }) }), filteredAchievements.map((ach) => (SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                gap: '10px',
                                width: '100%',
                                boxSizing: 'border-box',
                            }, children: [SP_JSX.jsx("img", { src: ach.is_achieved ? ach.icon_normal : ach.icon_locked, alt: ach.name, style: {
                                        width: '38px',
                                        height: '38px',
                                        minWidth: '38px',
                                        maxWidth: '38px',
                                        borderRadius: '6px',
                                        objectFit: 'cover',
                                        flexShrink: 0,
                                    }, onError: (e) => {
                                        e.target.style.display = 'none';
                                    } }), SP_JSX.jsxs("div", { style: { flex: '1 1 0%', minWidth: 0, overflow: 'hidden' }, children: [SP_JSX.jsx(DFL.Marquee, { fadeLength: 12, speed: 25, delay: 1.5, style: {
                                                fontSize: '13px',
                                                fontWeight: 'bold',
                                                color: ach.is_achieved ? '#2ecc71' : '#ffffff',
                                            }, children: ach.name }), ach.description && (SP_JSX.jsx("div", { style: {
                                                fontSize: '11px',
                                                color: '#95a5a6',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                marginTop: '2px',
                                            }, children: ach.description })), ach.global_achieved_percent !== undefined && (SP_JSX.jsx("div", { style: { fontSize: '10px', color: '#7f8c8d', marginTop: '2px' }, children: t.playersUnlocked.replace('{percent}', String(ach.global_achieved_percent)) }))] }), SP_JSX.jsx("div", { style: {
                                        width: '38px',
                                        minWidth: '38px',
                                        maxWidth: '38px',
                                        height: '38px',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }, children: SP_JSX.jsx(DFL.DialogButton, { disabled: actionInProgress !== null, onClick: () => handleToggleAchievement(ach), style: {
                                            width: '38px',
                                            minWidth: '38px',
                                            maxWidth: '38px',
                                            height: '38px',
                                            minHeight: '38px',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '6px',
                                            backgroundColor: ach.is_achieved ? 'rgba(231, 76, 60, 0.2)' : 'rgba(46, 204, 113, 0.2)',
                                        }, children: ach.is_achieved ? (SP_JSX.jsx(FaLock, { style: { color: '#e74c3c', fontSize: '15px' } })) : (SP_JSX.jsx(FaUnlock, { style: { color: '#2ecc71', fontSize: '15px' } })) }) })] }) }, ach.id))), filteredAchievements.length === 0 && (SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx("div", { style: { color: '#95a5a6', fontSize: '12px', textAlign: 'center', padding: '10px' }, children: t.noAchievementsFound }) }))] })), !loading && !isVacProtected && !isNonSteamGame && !hasNoAchievements && (!isMultiplayerBlocked || allowMultiplayer) && achievements.length === 0 && currentAppId && !errorMsg && (SP_JSX.jsx(DFL.PanelSection, { children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx("div", { style: { color: '#95a5a6', fontSize: '12px', textAlign: 'center', padding: '15px' }, children: t.noAchievementsForGame }) }) })), !isGameRunning && (SP_JSX.jsxs(DFL.PanelSection, { title: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438 \u0440\u0435\u0436\u0438\u043C\u044B", children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ToggleField, { label: t.allowMultiplayerLabel, description: t.allowMultiplayerDesc, checked: allowMultiplayer, onChange: (val) => setAllowMultiplayer(val) }) }), allowMultiplayer && (SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: {
                                padding: '10px 12px',
                                backgroundColor: 'rgba(231, 76, 60, 0.12)',
                                borderRadius: '6px',
                                border: '2px solid #e74c3c',
                                color: '#ff7675',
                                fontSize: '11px',
                                lineHeight: '1.45',
                                boxSizing: 'border-box',
                            }, children: [SP_JSX.jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', marginBottom: '4px', color: '#ff4d4d' }, children: [SP_JSX.jsx(FaExclamationTriangle, { style: { fontSize: '14px' } }), "\u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415 / WARNING"] }), t.multiplayerWarningRisk] }) }))] }))] }));
};
var index = definePlugin(() => {
    return {
        name: 'SAM',
        titleView: (SP_JSX.jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '1px' }, children: [SP_JSX.jsx("div", { style: { fontSize: '15px', fontWeight: 'bold', color: '#ffffff' }, children: "SAM" }), SP_JSX.jsx("div", { style: { fontSize: '10px', color: '#8a9aa8', textTransform: 'uppercase', letterSpacing: '0.5px' }, children: "Steam Achievement Manager" })] })),
        icon: SP_JSX.jsx(FaTrophy, {}),
        content: SP_JSX.jsx(Content, {}),
        onDismount() { },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
