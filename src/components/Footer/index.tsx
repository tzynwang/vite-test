import React, { memo } from 'react';
import Container from '@mui/material/Container';

function Footer(): React.ReactElement {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()} Tzu Yin Wang 🦊 Made in Taiwan
      </Container>
    </footer>
  );
}

export default memo(Footer);
