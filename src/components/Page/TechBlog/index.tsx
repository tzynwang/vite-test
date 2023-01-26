import React, { memo } from 'react';
import ContentListLayout from '@/components/Layout/ContentList';

function TechBlog(): React.ReactElement {
  return (
    <ContentListLayout
      side={<React.Fragment>tech blog side content</React.Fragment>}
      main={<React.Fragment>tech blog main content</React.Fragment>}
    />
  );
}

export default memo(TechBlog);
