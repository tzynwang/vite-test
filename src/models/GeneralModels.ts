import type {
  CategoryCountPairs,
  SeriesPosts,
  TableOfContents,
} from './GeneralTypes';

/** 若 i18n.t 中帶有需要動態替換的內容，以此符號標註替換位置 */
export const REPLACEMENT = `{$}`;

/** 根據此比例來判定元件 PostCard 要進入 RECTANGLE 或 SQUARE 狀態 */
export const POST_CARD_DIMENSION_RATIO = 1.75;

/** 設定 dayjs().format() 的日期格式 */
export const DATE_TIME_FORMAT = 'YYYY-MM-DD';

export enum ROUTE {
  HOME = '/',
  TECH_BLOG = '/archive',
  TECH_BLOG_CATEGORY = '/category/:category',
  TECH_BLOG_SINGLE_POST = '/:year/:postTitle',
  SNIPPET = '/snippet',
  BLOG = '/bookshelf',
}

export const MOCK_COVER_IMAGE =
  'linear-gradient(45deg, rgba(120,119,126,1) 0%, rgba(112,112,177,1) 35%, rgba(143,196,207,1) 100%)';

export const MOCK_POST_TITLE =
  '(MOCK) 透過 compositionstart、compositionend 來暫停驗證輸入內容';

export const MOCK_POST_TITLE_1 =
  '(MOCK) Dialogs, modality and popovers seem similar. How are they different?';

export const MOCK_POST_TITLE_2 =
  '(MOCK) 鐵人賽 Modern Web 組「我們可以不要 component library 了嗎？」第 22 - 30 天';

export const MOCK_POST_CATEGORIES = ['MOCK_MaterialUI', 'MOCK_TypeScript'];

export const MOCK_POST_CATEGORY_PAIRS: CategoryCountPairs =
  MOCK_POST_CATEGORIES.map((categoryName, index) => ({
    categoryName,
    count: index + 7,
  }));

export const MOCK_POST_DATE = new Date().toString();

export const MOCK_POST_LISTS = Array.from(Array(5).keys());

export const MOCK_SERIES_POSTS: SeriesPosts = Array.from(Array(4).keys()).map(
  () => ({
    postUrl: ROUTE.TECH_BLOG_SINGLE_POST,
    postTitle: MOCK_POST_TITLE_2,
  })
);

export const MOCK_TABLE_OF_CONTENTS: TableOfContents = Array.from(
  Array(4).keys()
).map((num) => ({
  to: `SUB_TITLE_ANCHOR_${num}`,
  postSubTitle: `POST_SUB_TITLE_${num}`,
}));
