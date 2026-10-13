import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  DropdownItem,
  TextField,
  SteamSpinner,
  Router,
  Marquee,
  DialogButton,
  ToggleField,
} from '@decky/ui';
import {
  definePlugin,
  callable,
  toaster,
} from '@decky/api';
import { FC, useState, useEffect, useMemo } from 'react';
import {
  FaTrophy,
  FaExclamationTriangle,
  FaLock,
  FaUnlock,
  FaInfoCircle,
} from 'react-icons/fa';
import { getTranslations, Translations } from './i18n';

interface Achievement {
  id: string;
  name: string;
  description: string;
  is_achieved: boolean;
  unlock_time: string | null;
  icon_normal: string;
  icon_locked: string;
  global_achieved_percent?: number;
}

// Связывание с методами Python бэкенда через @decky/api callable
const getSystemLanguageCall = callable<[], { language: string }>('get_system_language');

const getAchievementsCall = callable<
  [app_id: number, allow_multiplayer: boolean, language?: string],
  {
    success: boolean;
    is_vac?: boolean;
    is_multiplayer?: boolean;
    error?: string;
    achievements?: Achievement[];
  }
>('get_achievements');

const unlockAchievementCall = callable<
  [app_id: number, achievement_id: string, allow_multiplayer: boolean],
  { success: boolean; is_vac?: boolean; is_multiplayer?: boolean; error?: string }
>('unlock_achievement');

const lockAchievementCall = callable<
  [app_id: number, achievement_id: string, allow_multiplayer: boolean],
  { success: boolean; is_vac?: boolean; is_multiplayer?: boolean; error?: string }
>('lock_achievement');

const unlockAllCall = callable<
  [app_id: number, allow_multiplayer: boolean],
  { success: boolean; is_vac?: boolean; is_multiplayer?: boolean; error?: string }
>('unlock_all');

const lockAllCall = callable<
  [app_id: number, allow_multiplayer: boolean],
  { success: boolean; is_vac?: boolean; is_multiplayer?: boolean; error?: string }
>('lock_all');

const Content: FC = () => {
  const [currentAppId, setCurrentAppId] = useState<number | null>(null);
  const [currentAppName, setCurrentAppName] = useState<string>('');
  const [manualAppId, setManualAppId] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isVacProtected, setIsVacProtected] = useState<boolean>(false);
  const [isMultiplayerBlocked, setIsMultiplayerBlocked] = useState<boolean>(false);
  const [isNonSteamGame, setIsNonSteamGame] = useState<boolean>(false);
  const [hasNoAchievements, setHasNoAchievements] = useState<boolean>(false);

  // Настройка: разрешить для мультиплеерных игр (по умолчанию выключено)
  const [allowMultiplayer, setAllowMultiplayer] = useState<boolean>(false);

  // Язык интерфейса и схемы
  const [currentLanguage, setCurrentLanguage] = useState<string>('english');

  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterMode, setFilterMode] = useState<'all' | 'unlocked' | 'locked'>('all');

  const [actionInProgress, setActionInProgress] = useState<string | null>(null);

  // Получаем словарь локализации для текущего языка
  const t: Translations = useMemo(() => getTranslations(currentLanguage), [currentLanguage]);

  // Загружаем язык системы Steam при инициализации
  useEffect(() => {
    (async () => {
      try {
        const res = await getSystemLanguageCall();
        if (res && res.language) {
          setCurrentLanguage(res.language);
        }
      } catch (e) {
        console.error('[SAM] Error getting system language:', e);
      }
    })();
  }, []);

  // Определение текущей активной игры при открытии QAM
  const detectRunningApp = () => {
    try {
      const runningApp = Router.MainRunningApp;
      if (runningApp && runningApp.appid) {
        const id = parseInt(runningApp.appid, 10);
        if (!isNaN(id) && id > 0) {
          setCurrentAppId(id);
          setCurrentAppName(runningApp.display_name || `App ${id}`);
          return;
        }
      }
    } catch (e) {
      console.error('[SAM] Router.MainRunningApp detection error:', e);
    }
  };

  useEffect(() => {
    detectRunningApp();
  }, []);

  // Загрузка ачивок при смене AppId, разрешения мультиплеера или языка
  useEffect(() => {
    if (!currentAppId) return;

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

        if (!isMounted) return;

        if (result && result.success) {
          const list = result.achievements || [];
          setAchievements(list);
          setIsVacProtected(false);
          setIsMultiplayerBlocked(false);
          setIsNonSteamGame(false);
          if (list.length === 0) {
            setHasNoAchievements(true);
          } else {
            setHasNoAchievements(false);
          }
        } else {
          if (result?.is_vac) {
            setIsVacProtected(true);
            setErrorMsg(t.vacProtectedDesc);
          } else if (result?.is_multiplayer && !allowMultiplayer) {
            setIsMultiplayerBlocked(true);
            setErrorMsg(t.multiplayerBlockedDesc);
          } else if (result?.error === 'NON_STEAM_GAME') {
            setIsNonSteamGame(true);
          } else if (result?.error === 'NO_ACHIEVEMENTS') {
            setHasNoAchievements(true);
          } else {
            setErrorMsg(result?.error || t.toastError);
          }
        }
      } catch (err: any) {
        if (!isMounted) return;
        setErrorMsg(err.message || 'Backend call error');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [currentAppId, allowMultiplayer, currentLanguage, t]);

  // Разблокировать / Заблокировать одно достижение
  const handleToggleAchievement = async (ach: Achievement) => {
    if (isVacProtected || (isMultiplayerBlocked && !allowMultiplayer) || actionInProgress) return;
    setActionInProgress(ach.id);

    try {
      if (ach.is_achieved) {
        const result = await lockAchievementCall(currentAppId!, ach.id, allowMultiplayer);
        if (result && result.success) {
          setAchievements((prev) =>
            prev.map((item) => (item.id === ach.id ? { ...item, is_achieved: false } : item))
          );
          toaster.toast({
            title: 'SAM',
            body: t.toastLocked.replace('{name}', ach.name),
            duration: 2000,
          });
        } else {
          toaster.toast({
            title: t.toastError,
            body: result?.error || t.toastError,
            duration: 3500,
          });
        }
      } else {
        const result = await unlockAchievementCall(currentAppId!, ach.id, allowMultiplayer);
        if (result && result.success) {
          setAchievements((prev) =>
            prev.map((item) => (item.id === ach.id ? { ...item, is_achieved: true } : item))
          );
          toaster.toast({
            title: 'SAM',
            body: t.toastUnlocked.replace('{name}', ach.name),
            duration: 2000,
          });
        } else {
          toaster.toast({
            title: t.toastError,
            body: result?.error || t.toastError,
            duration: 3500,
          });
        }
      }
    } finally {
      setActionInProgress(null);
    }
  };

  // Разблокировать все
  const handleUnlockAll = async () => {
    if (!currentAppId || isVacProtected || (isMultiplayerBlocked && !allowMultiplayer) || actionInProgress) return;
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
      } else {
        toaster.toast({
          title: t.toastError,
          body: result?.error || t.toastError,
          duration: 3500,
        });
      }
    } finally {
      setActionInProgress(null);
    }
  };

  // Сбросить все
  const handleLockAll = async () => {
    if (!currentAppId || isVacProtected || (isMultiplayerBlocked && !allowMultiplayer) || actionInProgress) return;
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
      } else {
        toaster.toast({
          title: t.toastError,
          body: result?.error || t.toastError,
          duration: 3500,
        });
      }
    } finally {
      setActionInProgress(null);
    }
  };

  // Фильтрация достижений по поиску и статусу
  const filteredAchievements = useMemo(() => {
    return achievements.filter((item) => {
      if (filterMode === 'unlocked' && !item.is_achieved) return false;
      if (filterMode === 'locked' && item.is_achieved) return false;
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [achievements, filterMode, searchQuery]);

  const unlockedCount = useMemo(
    () => achievements.filter((a) => a.is_achieved).length,
    [achievements]
  );

  // Флаг: запущена ли игра прямо сейчас
  const isGameRunning = Boolean(currentAppName && currentAppId);

  return (
    <div>
      {/* Секция активной игры и ручного ввода */}
      <PanelSection>
        {/* Карточка активной игры на всю ширину */}
        <PanelSectionRow>
          <div
            style={{
              width: '100%',
              padding: '8px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '6px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ fontSize: '11px', color: '#8a9aa8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {t.activeGame}
            </div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginTop: '2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {currentAppName ? `${currentAppName} (ID: ${currentAppId})` : t.gameNotRunning}
            </div>
          </div>
        </PanelSectionRow>

        {/* Ручной ввод AppID — отображается ТОЛЬКО если игра НЕ запущена */}
        {!isGameRunning && (
          <PanelSectionRow>
            <TextField
              label={t.enterAppId}
              value={manualAppId}
              onChange={(e) => setManualAppId(e.target.value)}
            />
          </PanelSectionRow>
        )}

        {/* Кнопка "Загрузить по AppID" — отображается ТОЛЬКО если игра не запущена И введено непустое значение */}
        {!isGameRunning && manualAppId.trim().length > 0 && (
          <PanelSectionRow>
            <ButtonItem
              layout="below"
              onClick={() => {
                const parsed = parseInt(manualAppId.trim(), 10);
                if (!isNaN(parsed) && parsed > 0) {
                  setCurrentAppId(parsed);
                  setCurrentAppName(`App ${parsed}`);
                }
              }}
            >
              {t.loadByAppId}
            </ButtonItem>
          </PanelSectionRow>
        )}
      </PanelSection>

      {/* 3. Индикатор загрузки / Блокировка VAC / Блокировка мультиплеера / Ошибки */}
      {loading && (
        <PanelSection>
          <PanelSectionRow>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
              <SteamSpinner />
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {isVacProtected && (
        <PanelSection title={t.vacProtectedTitle}>
          <PanelSectionRow>
            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(231, 76, 60, 0.15)',
                borderRadius: '6px',
                border: '1px solid #e74c3c',
                color: '#ff7675',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <FaExclamationTriangle style={{ fontSize: '20px', minWidth: '20px' }} />
              <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
                <b>{t.vacProtectedTitle}</b>
                <br />
                {t.vacProtectedDesc}
              </div>
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {isMultiplayerBlocked && !allowMultiplayer && !isVacProtected && (
        <PanelSection title={t.multiplayerBlockedTitle}>
          <PanelSectionRow>
            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(230, 126, 34, 0.15)',
                borderRadius: '6px',
                border: '1px solid #e67e22',
                color: '#f39c12',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <FaExclamationTriangle style={{ fontSize: '20px', minWidth: '20px' }} />
              <div style={{ fontSize: '11px', lineHeight: '1.4', color: '#ecf0f1' }}>
                <b style={{ color: '#e67e22' }}>{t.multiplayerBlockedTitle}</b>
                <br />
                {t.multiplayerBlockedDesc}
              </div>
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {/* Карточка: сторонняя игра */}
      {isNonSteamGame && !loading && (
        <PanelSection title={t.nonSteamGameTitle}>
          <PanelSectionRow>
            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(52, 152, 219, 0.15)',
                borderRadius: '6px',
                border: '1px solid #3498db',
                color: '#74b9ff',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <FaInfoCircle style={{ fontSize: '20px', minWidth: '20px', color: '#3498db' }} />
              <div style={{ fontSize: '11px', lineHeight: '1.4', color: '#ecf0f1' }}>
                <b style={{ color: '#3498db' }}>{t.nonSteamGameTitle}</b>
                <br />
                {t.nonSteamGameDesc}
              </div>
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {/* Карточка: достижения отсутствуют */}
      {hasNoAchievements && !isNonSteamGame && !isVacProtected && !loading && (
        <PanelSection title={t.noAchievementsTitle}>
          <PanelSectionRow>
            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(149, 165, 166, 0.15)',
                borderRadius: '6px',
                border: '1px solid #7f8c8d',
                color: '#bdc3c7',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <FaInfoCircle style={{ fontSize: '20px', minWidth: '20px', color: '#bdc3c7' }} />
              <div style={{ fontSize: '11px', lineHeight: '1.4', color: '#ecf0f1' }}>
                <b style={{ color: '#ecf0f1' }}>{t.noAchievementsTitle}</b>
                <br />
                {t.noAchievementsDesc}
              </div>
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {errorMsg && !isVacProtected && !isNonSteamGame && !hasNoAchievements && (!isMultiplayerBlocked || allowMultiplayer) && (
        <PanelSection>
          <PanelSectionRow>
            <div
              style={{
                color: '#e74c3c',
                fontSize: '11px',
                padding: '8px',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderRadius: '4px',
              }}
            >
              {errorMsg}
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {/* 4. Панель управления достижениями */}
      {!loading && !isVacProtected && (!isMultiplayerBlocked || allowMultiplayer) && achievements.length > 0 && (
        <PanelSection
          title={`${t.achievements} (${unlockedCount} / ${achievements.length})`}
        >
          {/* Массовые операции */}
          <PanelSectionRow>
            <ButtonItem
              layout="below"
              disabled={actionInProgress !== null}
              onClick={handleUnlockAll}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <FaUnlock /> {t.unlockAll}
              </div>
            </ButtonItem>
          </PanelSectionRow>

          <PanelSectionRow>
            <ButtonItem
              layout="below"
              disabled={actionInProgress !== null}
              onClick={handleLockAll}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <FaLock /> {t.lockAll}
              </div>
            </ButtonItem>
          </PanelSectionRow>

          {/* Фильтр и поиск */}
          <PanelSectionRow>
            <TextField
              label={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </PanelSectionRow>

          <PanelSectionRow>
            <DropdownItem
              label={t.filterStatus}
              selectedOption={filterMode}
              onChange={(val) => setFilterMode(val.data as any)}
              rgOptions={[
                { data: 'all', label: `${t.filterAll} (${achievements.length})` },
                { data: 'unlocked', label: `${t.filterUnlocked} (${unlockedCount})` },
                { data: 'locked', label: `${t.filterLocked} (${achievements.length - unlockedCount})` },
              ]}
            />
          </PanelSectionRow>

          {/* Список достижений */}
          {filteredAchievements.map((ach) => (
            <PanelSectionRow key={ach.id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  gap: '10px',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {/* Иконка достижения */}
                <img
                  src={ach.is_achieved ? ach.icon_normal : ach.icon_locked}
                  alt={ach.name}
                  style={{
                    width: '38px',
                    height: '38px',
                    minWidth: '38px',
                    maxWidth: '38px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Текстовый блок (название с бегущей строкой Marquee, описание, процент) */}
                <div style={{ flex: '1 1 0%', minWidth: 0, overflow: 'hidden' }}>
                  <Marquee
                    fadeLength={12}
                    speed={25}
                    delay={1.5}
                    style={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: ach.is_achieved ? '#2ecc71' : '#ffffff',
                    }}
                  >
                    {ach.name}
                  </Marquee>

                  {ach.description && (
                    <div
                      style={{
                        fontSize: '11px',
                        color: '#95a5a6',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginTop: '2px',
                      }}
                    >
                      {ach.description}
                    </div>
                  )}

                  {ach.global_achieved_percent !== undefined && (
                    <div style={{ fontSize: '10px', color: '#7f8c8d', marginTop: '2px' }}>
                      {t.playersUnlocked.replace('{percent}', String(ach.global_achieved_percent))}
                    </div>
                  )}
                </div>

                {/* Компактная квадратная кнопка переключения */}
                <div
                  style={{
                    width: '38px',
                    minWidth: '38px',
                    maxWidth: '38px',
                    height: '38px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <DialogButton
                    disabled={actionInProgress !== null}
                    onClick={() => handleToggleAchievement(ach)}
                    style={{
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
                    }}
                  >
                    {ach.is_achieved ? (
                      <FaLock style={{ color: '#e74c3c', fontSize: '15px' }} />
                    ) : (
                      <FaUnlock style={{ color: '#2ecc71', fontSize: '15px' }} />
                    )}
                  </DialogButton>
                </div>
              </div>
            </PanelSectionRow>
          ))}

          {filteredAchievements.length === 0 && (
            <PanelSectionRow>
              <div style={{ color: '#95a5a6', fontSize: '12px', textAlign: 'center', padding: '10px' }}>
                {t.noAchievementsFound}
              </div>
            </PanelSectionRow>
          )}
        </PanelSection>
      )}

      {!loading && !isVacProtected && !isNonSteamGame && !hasNoAchievements && (!isMultiplayerBlocked || allowMultiplayer) && achievements.length === 0 && currentAppId && !errorMsg && (
        <PanelSection>
          <PanelSectionRow>
            <div style={{ color: '#95a5a6', fontSize: '12px', textAlign: 'center', padding: '15px' }}>
              {t.noAchievementsForGame}
            </div>
          </PanelSectionRow>
        </PanelSection>
      )}

      {/* 5. Настройки внизу (скрываются, если запущена игра) */}
      {!isGameRunning && (
        <PanelSection title="Безопасность и режимы">
          <PanelSectionRow>
            <ToggleField
              label={t.allowMultiplayerLabel}
              description={t.allowMultiplayerDesc}
              checked={allowMultiplayer}
              onChange={(val) => setAllowMultiplayer(val)}
            />
          </PanelSectionRow>

          {/* Предупреждение в красной рамке при включенном переключателе */}
          {allowMultiplayer && (
            <PanelSectionRow>
              <div
                style={{
                  padding: '10px 12px',
                  backgroundColor: 'rgba(231, 76, 60, 0.12)',
                  borderRadius: '6px',
                  border: '2px solid #e74c3c',
                  color: '#ff7675',
                  fontSize: '11px',
                  lineHeight: '1.45',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', marginBottom: '4px', color: '#ff4d4d' }}>
                  <FaExclamationTriangle style={{ fontSize: '14px' }} />
                  ВНИМАНИЕ / WARNING
                </div>
                {t.multiplayerWarningRisk}
              </div>
            </PanelSectionRow>
          )}
        </PanelSection>
      )}
    </div>
  );
};

export default definePlugin(() => {
  return {
    name: 'SAM',
    titleView: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#ffffff' }}>SAM</div>
        <div style={{ fontSize: '10px', color: '#8a9aa8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Steam Achievement Manager
        </div>
      </div>
    ),
    icon: <FaTrophy />,
    content: <Content />,
    onDismount() {},
  };
});
