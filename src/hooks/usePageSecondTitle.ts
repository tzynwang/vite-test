import { useMemo } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import useI18n from '@/hooks/useI18n';
import useUrlPath from '@/hooks/useUrlPath';
import { ROUTE } from '@/models/GeneralModels';
import type { ParamsCategory } from '@/models/GeneralTypes';

export default function usePageSecondTitle() {
  /* States */
  const { pathname } = useLocation();
  const { category } = useParams<ParamsCategory>();
  const i18n = useI18n();
  const { techBlogCategory } = useUrlPath();
  const isInTechBlogCategoryPath = !!useRouteMatch(techBlogCategory);

  /* Data */
  const secondTitleByPathname = useMemo(() => {
    if (pathname.match(ROUTE.SNIPPET)) return i18n.t('frontend.nav.snippet');
    if (pathname.match(ROUTE.BLOG)) return i18n.t('frontend.nav.blog');
    if (pathname.match(ROUTE.TECH_BLOG)) return i18n.t('frontend.nav.techBlog');
    if (isInTechBlogCategoryPath)
      return `${i18n.t('frontend.nav.techBlog')}：${category}`;
    return '';
  }, [pathname, isInTechBlogCategoryPath, category]);

  /* Main */
  return secondTitleByPathname;
}
