// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Hier kannst du die Farben, Fonts und weitere Theme-Optionen anpassen.
// Die Werte sind beispielhaft und orientieren sich an MD3-Farbschemata.
const theme = createTheme({
  palette: {
    primary: {
      main: '#66B6F7', // Beispiel: Primärfarbe
    },
    secondary: {
      main: '#FB958D', // Beispiel: Sekundärfarbe
    },
    background: {
      default: '#444749',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Weitere Anpassungen z.B. fontSize, fontWeight etc.
  },
  // Weitere Theme-Anpassungen (Spacing, Breakpoints, etc.) möglich
});

export default theme;
