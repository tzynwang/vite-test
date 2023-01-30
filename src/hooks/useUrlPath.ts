import { useMemo } from 'react';
import { ROUTE } from '@/models/GeneralModels';

export default function useUrlPath() {
  /* Data */
  const urlPrefix = useMemo(() => import.meta.env.BASE_URL, []);

  /* Main */
  return {
    home: `${urlPrefix}${ROUTE.HOME}`,
    techBlog: `${urlPrefix}${ROUTE.TECH_BLOG}`,
    techBlogCategory: `${urlPrefix}${ROUTE.TECH_BLOG_CATEGORY}`,
    snippet: `${urlPrefix}${ROUTE.SNIPPET}`,
    blog: `${urlPrefix}${ROUTE.BLOG}`,
  };
}
