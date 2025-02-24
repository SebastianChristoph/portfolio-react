// src/App.tsx
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SettingsSpeedDial from "./components/SettingsSpeedDial";
import Tech from "./components/Tech";
import "./i18n"; // i18n initialisieren
import { darkTheme, lightTheme } from "./theme";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default: dark theme
  const { i18n } = useTranslation();

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "de" ? "en" : "de";
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
        <Tech />
      </Box>
    </ThemeProvider>
  );
};

export default App;
