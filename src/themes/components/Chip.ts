import { t } from '@/themes';

export default {
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
};
