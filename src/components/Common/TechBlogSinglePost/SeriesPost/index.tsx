import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useI18n from '@/hooks/useI18n';
import type { SeriesPostsProps } from './types';

function SeriesPosts(props: SeriesPostsProps): React.ReactElement {
  /* States */
  const { seriesPosts } = props;
  const i18n = useI18n();

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.seriesPost')}
      </Typography>
      <ul>
        {seriesPosts.map((post, index) => (
          <li key={index}>
            <Link to={post.postUrl}>{post.postTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(SeriesPosts);
