import React, { memo } from 'react';
import ContentListLayout from '@/components/Layout/ContentList';

function Blog(): React.ReactElement {
  return (
    <ContentListLayout
      side={<React.Fragment>blog side content</React.Fragment>}
      main={<React.Fragment>blog main content</React.Fragment>}
    />
  );
}

export default memo(Blog);
