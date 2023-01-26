import React, { memo } from 'react';
import cn from 'classnames';
import Container from '@mui/material/Container';
import theme, { useMediaQuery } from './../../theme';
import scopedStyles from './index.module.css';

function Footer(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Main */
  return (
    <nav>
      <Container>
        <h1>普通文組</h1>
        <div
          className={cn(
            breakpointsUpSm
              ? scopedStyles.nav_ul_container_up_sm
              : scopedStyles.nav_ul_container
          )}
        >
          <ul className={cn(scopedStyles.nav_ul)}>
            <li>首頁</li>
            <li>技術筆記</li>
            <li>技術小抄</li>
            <li>肥宅圖書館</li>
          </ul>
          <ul className={cn(scopedStyles.nav_ul)}>
            <li>gitHub</li>
            <li>rss feed</li>
            <li>theme</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default memo(Footer);
