import * as React from 'react';

export interface ElementProps {
  className?: string;
  children?: React.ReactNode;
}

export interface Props {
  tagName?: string;
  role?: string;
  children?: React.ReactNode;
  className?: string;
  classNames?: any;
}

export function Element(props: Props) {
  const { tagName = 'div', children = null, className = null, classNames = {}, ...rest } = props;

  const klassName = `${className} ${Object.values(classNames)[0]}`;
  return React.createElement(tagName, { className: klassName, ...rest }, children);
}
