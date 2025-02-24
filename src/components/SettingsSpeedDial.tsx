// src/components/SettingsSpeedDial.tsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTranslation } from 'react-i18next';

// Komponente für das Flag-Icon:
// Zeigt eine englische Fahne, wenn aktuell Deutsch eingestellt ist,
// und eine deutsche Fahne, wenn aktuell Englisch eingestellt ist.
const LanguageIcon = () => {
  const { i18n } = useTranslation();
  // Wenn aktuell Deutsch eingestellt ist, soll die englische Flagge angezeigt werden (und umgekehrt)
  const flagUrl = i18n.language === 'de' ? '/flags/us.png' : '/flags/de.png';
  const altText = i18n.language === 'de' ? 'US Flag' : 'German Flag';

  return (
    <img
      src={flagUrl}
      alt={altText}
      style={{ width: '24px', height: '24px', objectFit: 'contain' }}
    />
  );
};
interface SettingsSpeedDialProps {
  onToggleTheme: () => void;
  onChangeLanguage: () => void;
}

const SettingsSpeedDial: React.FC<SettingsSpeedDialProps> = ({ onToggleTheme, onChangeLanguage }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const actions = [
    { icon: <LanguageIcon />, name: t('settings.language'), action: 'changeLanguage' },
    { icon: <Brightness4Icon />, name: t('settings.theme'), action: 'toggleTheme' }
  ];

  const handleActionClick = (action: string) => {
    if (action === 'changeLanguage') {
      onChangeLanguage();
    } else if (action === 'toggleTheme') {
      onToggleTheme();
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <SpeedDial ariaLabel="Einstellungen" icon={<SettingsIcon />} direction="up" open={open}>
        {actions.map((actionItem) => (
          <SpeedDialAction
            key={actionItem.name}
            icon={actionItem.icon}
            tooltipTitle={actionItem.name}
            onClick={() => handleActionClick(actionItem.action)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SettingsSpeedDial;
