import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
  palette: {
    mode: 'light', // podes cambiar a 'dark' dinámicamente
    primary: {
      main: '#6A89A7', // color primario
    },
    secondary: {
      main: '#384959', // color secundario/acento
    },
    background: {
      default: '#88BDF2', // fondo de página
      paper: '#BBBDBC',   // fondo de cards o contenedores
    },
    text: {
      primary: '#384959',
      secondary: '#384959',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
