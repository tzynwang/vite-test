import React, { memo } from 'react';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import AnchorScroll from '@/components/Common/AnchorScroll';
import useI18n from '@/hooks/useI18n';
import scopedStyles from './index.module.css';
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
      <ul className={cn(scopedStyles.toc_container)}>
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
