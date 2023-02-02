import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ThemeToggle from '@/components/Common/ThemeToggle';
import theme, { useMediaQuery } from '@/themes';
import useI18n from '@/hooks/useI18n';
import useUrlPath from '@/hooks/useUrlPath';
import scopedStyles from './index.module.css';

function Footer(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const i18n = useI18n();

  /* Data */
  const paths = useUrlPath();

  /* Main */
  return (
    <nav>
      <Container>
        <Typography variant="h1">
          {i18n.t('frontend.global.title.siteTitle')}
        </Typography>
        <div
          className={cn(
            breakpointsUpSm
              ? scopedStyles.nav_ul_container_up_sm
              : scopedStyles.nav_ul_container
          )}
        >
          <ul className={cn(scopedStyles.nav_ul)}>
            <li>
              <Link to={paths.home}>{i18n.t('frontend.nav.homePage')}</Link>
            </li>
            <li>
              <Link to={paths.techBlog}>{i18n.t('frontend.nav.techBlog')}</Link>
            </li>
            <li>
              <Link to={paths.snippet}>{i18n.t('frontend.nav.snippet')}</Link>
            </li>
            <li>
              <Link to={paths.blog}>{i18n.t('frontend.nav.blog')}</Link>
            </li>
          </ul>
          <ul className={cn(scopedStyles.nav_ul)}>
            <li>{i18n.t('frontend.nav.GitHub')}</li>
            <li>{i18n.t('frontend.nav.RssFeed')}</li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default memo(Footer);
