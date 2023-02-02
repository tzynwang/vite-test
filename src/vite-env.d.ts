/// <reference types="vite/client" />

// TODO: once adding following content, declare module '*.svg' fail, why?
/* import type { SyntaxHighlighterLanguage } from '@/models/GeneralTypes';

declare module 'react-syntax-highlighter' {
  export interface SyntaxHighlighterProps {
    language?: SyntaxHighlighterLanguage;
  }
} */

declare module '*.svg' {
  import * as React from 'react';

  const src: string;

  export default src;

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}
