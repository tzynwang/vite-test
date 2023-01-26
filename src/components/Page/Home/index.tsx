import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Footer from '@/components/Common/Footer';
import theme, { useMediaQuery } from '@/themes';
import useI18n from '@/hooks/useI18n';
import { useReplaceToNode } from '@/hooks/useStringReplacement';
import useUrlPath from '@/hooks/useUrlPath';
import scopedStyles from './index.module.css';

function Home(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const i18n = useI18n();
  const path = useUrlPath();

  /* Views */
  const LatestPostsBlock = useMemo(
    () => (
      <div
        className={cn(
          breakpointsUpSm
            ? scopedStyles.main_section_main_up_sm
            : scopedStyles.main_section_main
        )}
      >
        <div className={cn(scopedStyles.main_section_main_latest)}>
          <div
            className={cn(scopedStyles.blog_post)}
            style={{ backgroundColor: theme.palette.grey[200] }}
          >
            latest blog
          </div>
        </div>
        <div className={cn(scopedStyles.main_section_main_second)}>
          <div
            className={cn(scopedStyles.blog_post)}
            style={{ backgroundColor: theme.palette.grey[300] }}
          >
            2nd latest blog
          </div>
        </div>
        <div className={cn(scopedStyles.main_section_main_third)}>
          <div
            className={cn(scopedStyles.blog_post)}
            style={{ backgroundColor: theme.palette.grey[400] }}
          >
            3rd latest blog
          </div>
        </div>
      </div>
    ),
    [breakpointsUpSm]
  );
  const MorePosts = useReplaceToNode(
    i18n.t('frontend.homePage.latestPosts.morePosts'),
    [<Link to={path.techBlog}>{i18n.t('frontend.nav.techBlog')}</Link>]
  );

  /* Main */
  return (
    <React.Fragment>
      {/* about */}
      <section>
        <Container>
          <Typography variant="h2">
            {i18n.t('frontend.homePage.about.secondTitle')}
          </Typography>
          <Typography variant="body1">
            {i18n.t('frontend.homePage.about.description')}
          </Typography>
        </Container>
      </section>

      {/* posts list */}
      <section>
        <Container>
          <Typography variant="h2">
            {i18n.t('frontend.homePage.latestPosts.secondTitle')}
          </Typography>
        </Container>
        {LatestPostsBlock}
        <Container>
          <ul>
            {Array.from(Array(5).keys()).map((num) => (
              <li key={num}>post {num + 4}</li>
            ))}
            <li>
              <Typography variant="body1">{MorePosts}</Typography>
            </li>
          </ul>
        </Container>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default memo(Home);
