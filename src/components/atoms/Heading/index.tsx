import * as React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: HeadingClassName = require('./heading.scss');

export interface HeadingClassName {
  heading?: string;
  [key: string]: string | undefined;
}

export interface HeadingProps extends ElementProps {
  level?: number;
  visualLevel?: number;
}

const Heading = (props: HeadingProps) => {
  const { children = undefined, level = 2, visualLevel = 2, ...rest } = props;

  const tagName = `h${level}`;
  const classNames = [styles.heading, styles[`h${visualLevel}`]].join(' ');

  return (
    <Element tagName={tagName} classNames={classNames} {...rest}>
      {children}
    </Element>
  );
};

export default Heading;
