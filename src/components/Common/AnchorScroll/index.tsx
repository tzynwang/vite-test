import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import type { AnchorScrollProps } from './types';

function AnchorScroll(props: AnchorScrollProps): React.ReactElement {
  /* States */
  const { to: anchorId, children } = props;
  const history = useHistory();

  /* Functions */
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
      targetElement.scrollIntoView(true);
      history.push(`#${anchorId}`);
    }
  };

  /* Main */
  return <a onClick={handleClick}>{children}</a>;
}

export default memo(AnchorScroll);
