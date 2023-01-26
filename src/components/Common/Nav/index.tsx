import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Container from '@mui/material/Container';
import theme, { useMediaQuery } from '@/themes';
import useUrlPath from '@/hooks/useUrlPath';
import scopedStyles from './index.module.css';

function Footer(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Data */
  const paths = useUrlPath();

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
            <li>
              <Link to={paths.home}>首頁</Link>
            </li>
            <li>
              <Link to={paths.techBlog}>技術筆記</Link>
            </li>
            <li>
              <Link to={paths.snippet}>技術小抄</Link>
            </li>
            <li>
              <Link to={paths.blog}>肥宅圖書館</Link>
            </li>
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
