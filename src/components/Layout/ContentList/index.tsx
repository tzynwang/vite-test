import React, { memo } from 'react';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import theme, { useMediaQuery } from '@/themes';
import usePageSecondTitle from '@/hooks/usePageSecondTitle';
import scopedStyles from './index.module.css';
import type { PostListProps } from './types';

function ContentList(props: PostListProps): React.ReactElement {
  /* States */
  const { side, main } = props;
  const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const secondTitle = usePageSecondTitle();

  /* Main */
  return (
    <Container>
      <Typography variant="h2">{secondTitle}</Typography>
      <div
        className={cn(
          breakpointsUpMd
            ? scopedStyles.PostList_container_up_md
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
