import type { Theme } from '@/themes';

export default (t: Theme) => ({
  MuiChip: {
    styleOverrides: {
      root: {
        cursor: 'pointer',
        maxWidth: '120px',
        [t.breakpoints.up('lg')]: {
          maxWidth: 'unset',
        },
      },
    },
  },
});
