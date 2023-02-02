import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import useUrlPath from '@/hooks/useUrlPath';
import type { PostCategoryChipProps } from './types';

function PostCategoryChip(props: PostCategoryChipProps): React.ReactElement {
  /* States */
  const { label: category, ...muiChipRestProps } = props;
  const { techBlogCategory } = useUrlPath();
  const categoryUrl = useMemo(
    () => techBlogCategory.replace(':category', category?.toString() || ''),
    [techBlogCategory, category?.toString()]
  );

  /* Main */
  return (
    <Chip
      label={<Link to={categoryUrl}>{category}</Link>}
      {...muiChipRestProps}
    />
  );
}

export default memo(PostCategoryChip);
