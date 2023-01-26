import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageSecondTitle() {
  /* States */
  const { pathname } = useLocation();
  const secondTitleByPathname = useMemo(() => {
    if (pathname.match('/snippet')) return '技術小抄';
    if (pathname.match('/blog')) return '肥宅圖書館';
    if (pathname.match('/')) return '技術筆記';
    return '';
  }, [pathname]);

  /* Main */
  return secondTitleByPathname;
}
