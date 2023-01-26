import React, { memo, useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useI18n from '@/hooks/useI18n';
import { useReplaceToString } from '@/hooks/useStringReplacement';

function Footer(): React.ReactElement {
  /* States */
  const i18n = useI18n();
  const thisYear = useMemo(() => `${new Date().getFullYear()}`, []);
  const footerDescription = useReplaceToString(
    i18n.t('frontend.footer.copyRight'),
    [thisYear]
  );

  /* Main */
  return (
    <footer>
      <Container>
        <Typography variant="body1" align="center">
          {footerDescription}
        </Typography>
      </Container>
    </footer>
  );
}

export default memo(Footer);
