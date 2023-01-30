import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import useI18n from '@/hooks/useI18n';
import { ROUTE } from '@/models/GeneralModels';

export default function usePageSecondTitle() {
  /* States */
  const { pathname } = useLocation();
  const i18n = useI18n();

  /* Data */
  const secondTitleByPathname = useMemo(() => {
    if (pathname.match(ROUTE.SNIPPET)) return i18n.t('frontend.nav.snippet');
    if (pathname.match(ROUTE.BLOG)) return i18n.t('frontend.nav.blog');
    if (pathname.match(ROUTE.TECH_BLOG)) return i18n.t('frontend.nav.techBlog');
    if (pathname.match(ROUTE.TECH_BLOG_CATEGORY)) return '技術筆記：分類標籤'; // TODO: dynamically get category name
    return '';
  }, [pathname]);

  /* Main */
  return secondTitleByPathname;
}
