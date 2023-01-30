import PostListItem from '@/components/Common/PostListItem';
import useUrlPath from '@/hooks/useUrlPath';
import {
  MOCK_POST_TITLE,
  MOCK_POST_DATE,
  MOCK_POST_CATEGORIES,
} from '@/models/GeneralModels';
import timeFormat from '@/tools/time-format';

/* TODO: T 與 list 待型別確認後就改為正確的資料 */
export default function useGetPostList<T>(lists: T[]) {
  /* States */
  const { techBlogSinglePost: MOCK_POST_URL } = useUrlPath();

  /* Main */
  return lists.map((list, index) => (
    <li key={index}>
      <PostListItem
        postDate={timeFormat(MOCK_POST_DATE)}
        postTitle={MOCK_POST_TITLE}
        postCategories={MOCK_POST_CATEGORIES}
        postUrl={MOCK_POST_URL}
      />
    </li>
  ));
}
