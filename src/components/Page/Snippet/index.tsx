import React, { memo } from 'react';
import cn from 'classnames';
import CategoryList from '@/components/Common/CategoryList';
import Code from '@/components/Common/Code';
import Breadcrumbs from '@/components/Layout/Breadcrumbs';
import ContentListLayout from '@/components/Layout/ContentList';
import PostListContainer from '@/components/Layout/PostListContainer';
import {
  MOCK_POST_CATEGORY_PAIRS_2,
  MOCK_CSS_CODE,
  MOCK_JSON_CODE,
  MOCK_MAKEFILE_CODE,
} from '@/models/GeneralModels';
import scopedStyles from './index.module.css';

function Snippet(): React.ReactElement {
  /* Main */
  return (
    <ContentListLayout
      side={<CategoryList categories={MOCK_POST_CATEGORY_PAIRS_2} />}
      main={
        <PostListContainer>
          <div>
            <Breadcrumbs>
              <span>category</span>
              <span>snippet title</span>
            </Breadcrumbs>
            <p>time</p>
            <p>snippet description</p>
            <div className={cn(scopedStyles.scopedStyles)}>
              <Code language="css">{MOCK_CSS_CODE}</Code>
            </div>
          </div>
          <div>
            <Breadcrumbs>
              <span>category</span>
              <span>snippet title</span>
            </Breadcrumbs>
            <p>time</p>
            <p>snippet description</p>
            <div className={cn(scopedStyles.scopedStyles)}>
              <Code language="json">{MOCK_JSON_CODE}</Code>
            </div>
          </div>
          <div>
            <Breadcrumbs>
              <span>category</span>
              <span>snippet title</span>
            </Breadcrumbs>
            <p>time</p>
            <p>snippet description</p>
            <div className={cn(scopedStyles.scopedStyles)}>
              <Code language="makefile">{MOCK_MAKEFILE_CODE}</Code>
            </div>
          </div>
        </PostListContainer>
      }
    />
  );
}

export default memo(Snippet);
