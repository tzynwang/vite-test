import React, { memo } from 'react';
import CategoryList from '@/components/Common/CategoryList';
import ContentListLayout from '@/components/Layout/ContentList';
import PostListContainer from '@/components/Layout/PostListContainer';
import useGetPostList from '@/hooks/useGetPostList';
import {
  MOCK_POST_LISTS,
  MOCK_POST_CATEGORY_PAIRS,
} from '@/models/GeneralModels';

function TechBlog(): React.ReactElement {
  /* States */
  const PostsList = useGetPostList(MOCK_POST_LISTS);

  /* Main */
  return (
    <ContentListLayout
      side={<CategoryList categories={MOCK_POST_CATEGORY_PAIRS} />}
      main={<PostListContainer>{PostsList}</PostListContainer>}
    />
  );
}

export default memo(TechBlog);
