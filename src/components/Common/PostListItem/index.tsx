import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useGetPostCategoryChip from '@/hooks/useGetPostCategoryChip';
import scopedStyles from './index.module.css';
import type { PostListItemProps } from './types';

function PostListItem(props: PostListItemProps): React.ReactElement {
  /* States */
  const { postDate, postTitle, postCategories, postUrl } = props;
  const PostCategoryChips = useGetPostCategoryChip(postCategories);

  /* Main */
  return (
    <div className={cn(scopedStyles.container)}>
      <Typography variant="body1">{postDate}</Typography>
      <Link to={postUrl}>
        <Typography variant="body1">{postTitle}</Typography>
      </Link>
      <div className={cn(scopedStyles.category_container)}>
        {PostCategoryChips}
      </div>
    </div>
  );
}

export default memo(PostListItem);
