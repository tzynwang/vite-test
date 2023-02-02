import { syntaxHighlighterLanguages } from '@/tools/react-syntax-highlighter-language-type';

export interface CategoryCountPair {
  categoryName: string;
  count: number;
}

export type CategoryCountPairs = CategoryCountPair[];

export interface ParamsCategory {
  category: string;
}

export interface SeriesPost {
  postUrl: string;
  postTitle: string;
}

export type SeriesPosts = SeriesPost[];

export interface TableOfContentItem {
  to: string;
  postSubTitle: string;
}

export type TableOfContents = TableOfContentItem[];

export type SyntaxHighlighterLanguage = typeof syntaxHighlighterLanguages[number];
