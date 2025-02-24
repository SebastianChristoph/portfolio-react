// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Erweiterung der Palette (siehe oben)
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    backgroundDarker: string;
    backgroundLighter: string;
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    backgroundDarker?: string;
    backgroundLighter?: string;
  }
}

// Light-Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6200ee' },
    secondary: { main: '#03dac6' },
    tertiary: { main: '#ff4081' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    backgroundDarker: '#e0e0e0',
    backgroundLighter: '#4d4d4d'
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
});

// Dark-Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#66B6F7' },
    secondary: { main: '#FB958D' },
    tertiary: { main: '#ff4081' },
    background: { default: '#2e2e2e', paper: '#1e1e1e' },
    backgroundDarker: '#0d0d0d',
    backgroundLighter: '#595959',
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
});
