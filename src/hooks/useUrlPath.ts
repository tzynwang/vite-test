import { useMemo } from 'react';

export default function useUrlPath() {
  /* Data */
  const urlPrefix = useMemo(() => import.meta.env.VITE_BASE, []);

  /* Main */
  return {
    home: `${urlPrefix}/home`,
    techBlog: `${urlPrefix}/`,
    snippet: `${urlPrefix}/snippet`,
    blog: `${urlPrefix}/blog`,
  };
}
