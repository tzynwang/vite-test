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
});

export default theme;

export { ThemeProvider, CssVarsProvider, useMediaQuery };

export type { Theme };
