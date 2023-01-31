import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import AnchorScroll from '@/components/Common/AnchorScroll';
import useI18n from '@/hooks/useI18n';
import type { TableOfContentProps } from './types';

function TableOfContent(props: TableOfContentProps): React.ReactElement {
  /* States */
  const { tableOfContents } = props;
  const i18n = useI18n();

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.toc')}
      </Typography>
      <ul>
        {tableOfContents.map((content, index) => (
          <li key={index}>
            <AnchorScroll to={content.to}>{content.postSubTitle}</AnchorScroll>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TableOfContent);
