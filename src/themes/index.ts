import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      margin: '1.25rem auto',
      fontSize: '3.5rem',
    },
    h2: {
      margin: '1rem auto',
      fontSize: '2.75rem',
    },
  },
});

export default theme;

export { ThemeProvider, StyledEngineProvider, useMediaQuery };

export type { Theme };
