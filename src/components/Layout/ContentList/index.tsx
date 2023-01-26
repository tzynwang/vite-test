import React, { memo } from 'react';
import cn from 'classnames';
import Container from '@mui/material/Container';
import theme, { useMediaQuery } from '@/theme';
import usePageSecondTitle from '@/hooks/usePageSecondTitle';
import scopedStyles from './index.module.css';
import type { PostListProps } from './types';

function ContentList(props: PostListProps): React.ReactElement {
  /* States */
  const { side, main } = props;
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const secondTitle = usePageSecondTitle();

  /* Main */
  return (
    <Container>
      <h2>{secondTitle}</h2>
      <div
        className={cn(
          breakpointsUpSm
            ? scopedStyles.PostList_container_up_sm
            : scopedStyles.PostList_container
        )}
      >
        <section>{side}</section>
        <section>{main}</section>
      </div>
    </Container>
  );
}

export default memo(ContentList);
