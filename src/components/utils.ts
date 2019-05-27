import * as React from 'react';

export interface ElementProps {
  tagName?: string;
  className?: string;
  style?: { [key: string]: string };
  styles?: string | string[];
  onClick?: () => void;
  children?: React.ReactNode;
  role?: string;
}

export function Element(props: ElementProps) {
  const { tagName = 'div', children = null, className = undefined, styles = undefined, ...rest } = props;

  if (Array.isArray(props.styles)) {
    return React.createElement(tagName, { className: [...props.styles, className].join(' '), ...rest }, children);
  }

  return React.createElement(tagName, { className: [props.styles, className].join(' '), ...rest }, children);
}
