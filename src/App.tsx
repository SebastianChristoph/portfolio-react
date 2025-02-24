// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SettingsSpeedDial from './components/SettingsSpeedDial';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTranslation } from 'react-i18next';
import './i18n'; // i18n initialisieren
import Box from '@mui/material/Box';
import About from './components/About';
import Tech from './components/Tech';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default: dark theme
  const { i18n } = useTranslation();

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleChangeLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Navbar />
      <Box className="App" sx={{ p: 0 }}>
        <SettingsSpeedDial
          onToggleTheme={handleToggleTheme}
          onChangeLanguage={handleChangeLanguage}
        />
        <Hero />
        <About />
        <Tech/>
      </Box>
    </ThemeProvider>
  );
};

export default App;
