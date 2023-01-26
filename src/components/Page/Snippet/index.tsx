import React, { memo } from 'react';
import ContentListLayout from '@/components/Layout/ContentList';

function Snippet(): React.ReactElement {
  return (
    <ContentListLayout
      side={<React.Fragment>snippet side content</React.Fragment>}
      main={<React.Fragment>snippet main content</React.Fragment>}
    />
  );
}

export default memo(Snippet);
