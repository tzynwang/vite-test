import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Footer from '@/components/Common/Footer';
import PostCard from '@/components/Common/PostCard';
import PostListContainer from '@/components/Layout/PostListContainer';
import useGetPostList from '@/hooks/useGetPostList';
import useI18n from '@/hooks/useI18n';
import { useReplaceToNode } from '@/hooks/useStringReplacement';
import useUrlPath from '@/hooks/useUrlPath';
import {
  MOCK_COVER_IMAGE,
  MOCK_POST_TITLE,
  MOCK_POST_TITLE_1,
  MOCK_POST_TITLE_2,
  MOCK_POST_DATE,
  MOCK_POST_CATEGORIES,
  MOCK_POST_LISTS,
  MOCK_POST_URL,
} from '@/models/GeneralModels';
import theme, { useMediaQuery } from '@/themes';
import timeFormat from '@/tools/time-format';
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
          <PostCard
            coverImage={MOCK_COVER_IMAGE}
            postTitle={MOCK_POST_TITLE}
            postDate={timeFormat(MOCK_POST_DATE)}
            postCategories={MOCK_POST_CATEGORIES}
            postUrl={MOCK_POST_URL}
          />
        </div>
        <div className={cn(scopedStyles.main_section_main_second)}>
          <PostCard
            coverImage={MOCK_COVER_IMAGE}
            postTitle={MOCK_POST_TITLE_1}
            postDate={timeFormat(MOCK_POST_DATE)}
            postCategories={MOCK_POST_CATEGORIES}
            postUrl={MOCK_POST_URL}
          />
        </div>
        <div className={cn(scopedStyles.main_section_main_third)}>
          <PostCard
            coverImage={MOCK_COVER_IMAGE}
            postTitle={MOCK_POST_TITLE_2}
            postDate={timeFormat(MOCK_POST_DATE)}
            postCategories={MOCK_POST_CATEGORIES}
            postUrl={MOCK_POST_URL}
          />
        </div>
      </div>
    ),
    [breakpointsUpSm]
  );
  const PostsList = useGetPostList(MOCK_POST_LISTS);
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
          <Typography variant="body1" className={scopedStyles.description}>
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
          <PostListContainer>
            {PostsList}
            <li>
              <Typography variant="body1">{MorePosts}</Typography>
            </li>
          </PostListContainer>
        </Container>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default memo(Home);
