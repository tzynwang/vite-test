import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import debounce from 'lodash/debounce';
import Typography from '@mui/material/Typography';
import useGetPostCategoryChip from '@/hooks/useGetPostCategoryChip';
import { POST_CARD_DIMENSION_RATIO } from '@/models/GeneralModels';
import scopedStyles from './index.module.css';
import type { PostCardProps } from './types';

enum POST_CARD_CONTAINER_RATIO {
  DEFAULT = 'DEFAULT',
  RECTANGLE = 'RECTANGLE',
  SQUARE = 'SQUARE',
}

function PostCard(props: PostCardProps): React.ReactElement {
  /* States */
  const { coverImage, postTitle, postDate, postCategories, postUrl } = props;
  const [containerRatio, setContainerRatio] =
    useState<POST_CARD_CONTAINER_RATIO>(POST_CARD_CONTAINER_RATIO.DEFAULT);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const PostCategoryChips = useGetPostCategoryChip(postCategories);

  /* Data */
  const containerStyle = useMemo(() => {
    switch (containerRatio) {
      case POST_CARD_CONTAINER_RATIO.RECTANGLE:
        return scopedStyles.rectangle;
      case POST_CARD_CONTAINER_RATIO.SQUARE:
        return scopedStyles.square;
      default:
        return '';
    }
  }, [containerRatio]);

  /* Functions */
  const getContainerDimension = useCallback((): void => {
    const dimension = containerRef.current?.getBoundingClientRect();
    if (dimension) {
      const { width, height } = dimension;
      if (width / height >= POST_CARD_DIMENSION_RATIO) {
        setContainerRatio(POST_CARD_CONTAINER_RATIO.RECTANGLE);
      } else {
        setContainerRatio(POST_CARD_CONTAINER_RATIO.SQUARE);
      }
    }
  }, []);
  const getContainerDimensionDebounce = debounce(getContainerDimension, 100);

  /* Hooks */
  useEffect(() => {
    getContainerDimension();
    window.addEventListener('resize', getContainerDimensionDebounce);
    return () => window.removeEventListener('resize', getContainerDimension);
  }, []);

  /* Views */
  const FinalPostCard = useMemo(() => {
    switch (containerRatio) {
      case POST_CARD_CONTAINER_RATIO.RECTANGLE:
        return (
          <React.Fragment>
            <div
              className={cn(scopedStyles.post_image)}
              style={{ backgroundImage: coverImage }}
            />
            <div className={cn(scopedStyles.post_text)}>
              <Link to={postUrl}>
                <Typography variant="h3">{postTitle}</Typography>
              </Link>
              <Typography
                variant="body1"
                className={cn(scopedStyles.post_date)}
              >
                {postDate}
              </Typography>
              <div className={cn(scopedStyles.category_container)}>
                {PostCategoryChips}
              </div>
            </div>
          </React.Fragment>
        );
      case POST_CARD_CONTAINER_RATIO.SQUARE:
        return (
          <div
            className={cn(scopedStyles.post_image)}
            style={{ backgroundImage: coverImage }}
          >
            <Link to={postUrl}>
              <Typography variant="h3">{postTitle}</Typography>
            </Link>
            <Typography variant="body1" className={cn(scopedStyles.post_date)}>
              {postDate}
            </Typography>
            <div className={cn(scopedStyles.category_container)}>
              {PostCategoryChips}
            </div>
          </div>
        );
      default:
        return <React.Fragment />;
    }
  }, [containerRatio, coverImage, postTitle, postDate, postUrl]);

  /* Main */
  return (
    <div
      ref={containerRef}
      className={cn(scopedStyles.container, containerStyle)}
    >
      {FinalPostCard}
    </div>
  );
}

export default memo(PostCard);
