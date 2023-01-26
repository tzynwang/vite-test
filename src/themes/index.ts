import {
  ThemeProvider,
  createTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
    },
    h2: {
      fontSize: '2.75rem',
    },
  },
});

export default theme;

export { ThemeProvider, CssVarsProvider, useMediaQuery };

export type { Theme };
