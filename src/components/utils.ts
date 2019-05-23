import * as React from 'react';

export interface ElementProps {
  tagName?: string;
  className?: string;
  classNames?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  role?: string;
}

export function Element(props: ElementProps) {
  const { tagName = 'div', children = null, className = undefined, classNames = undefined, ...rest } = props;
  const _className = [classNames, className].join(' ');

  return React.createElement(tagName, { className: _className, ...rest }, children);
}
