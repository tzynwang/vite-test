import React, { memo } from 'react';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useI18n from '@/hooks/useI18n';
import useGetPostCategoryChip from '@/hooks/useGetPostCategoryChip';
import theme, { useMediaQuery } from '@/themes';
import scopedStyles from './index.module.css';
import type { CategoryListProps } from './types';

function CategoryList(props: CategoryListProps): React.ReactElement {
  /* States */
  const { categoryLists } = props;
  const i18n = useI18n();
  const PostCategoryChips = useGetPostCategoryChip(categoryLists);
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.category')}
      </Typography>
      <ul
        className={cn(
          scopedStyles.category_container,
          breakpointsUpSm && scopedStyles.category_container_up_sm
        )}
      >
        {PostCategoryChips.map((chip, index) => (
          <li key={index}>{chip}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(CategoryList);
