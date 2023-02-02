import React, { memo, useMemo, Children } from 'react';
import cn from 'classnames';
import { BREADCRUMBS_DIVIDER } from '@/models/GeneralModels';
import scopedStyles from './index.module.css';
import type { BreadcrumbsProps } from './types';

function Breadcrumbs(props: BreadcrumbsProps): React.ReactElement {
  /* States */
  const { children, divider = <span>{BREADCRUMBS_DIVIDER}</span> } = props;

  /* Views */
  const childrenWithDivider = useMemo(() => {
    const finalArray: React.ReactNode[] = [];
    Children.forEach(children, (child) => {
      finalArray.push(child, divider);
    });
    finalArray.pop();
    return finalArray;
  }, [children?.toString()]);
  const FinalRender = useMemo(
    () =>
      childrenWithDivider.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      )),
    [childrenWithDivider.toString()]
  );

  /* Main */
  return <div className={cn(scopedStyles.container)}>{FinalRender}</div>;
}

export default memo(Breadcrumbs);
