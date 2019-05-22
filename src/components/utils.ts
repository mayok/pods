import * as React from 'react';

export interface ElementProps {
  tagName?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  role?: string;
}

export function Element(props: ElementProps) {
  const { tagName = 'div', children = null, ...rest } = props;

  return React.createElement(tagName, { className: [props.className, rest.className].join(' '), ...rest }, children);
}
