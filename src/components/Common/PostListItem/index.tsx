import React, { memo } from 'react';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useGetPostCategoryChip from '@/hooks/useGetPostCategoryChip';
import scopedStyles from './index.module.css';
import type { PostListItemProps } from './types';

function PostListItem(props: PostListItemProps): React.ReactElement {
  /* States */
  const { postDate, postTitle, postCategories } = props;
  const PostCategoryChips = useGetPostCategoryChip(postCategories);

  /* Main */
  return (
    <div className={cn(scopedStyles.container)}>
      <Typography variant="body1">{postDate}</Typography>
      <Typography variant="body1">{postTitle}</Typography>
      <div className={cn(scopedStyles.category_container)}>
        {PostCategoryChips}
      </div>
    </div>
  );
}

export default memo(PostListItem);
