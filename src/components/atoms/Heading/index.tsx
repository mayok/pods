import * as React from 'react';
import { Element, ElementProps } from '../../utils';

export interface HeadingClassName {
  [key: string]: string | undefined;
  heading?: string;
}

interface Props extends ElementProps {
  classNames?: HeadingClassName;
  level?: number;
  visualLevel?: number;
}

const Heading = (props: Props) => {
  const classNames = props.classNames || {};
  const { children = undefined, level = 2, visualLevel = 2, ...rest } = props;

  const tagName = `h${level}`;
  const vl = classNames[`h${visualLevel}`];
  // const className = `${classNames.heading} ${vl}`;
  const className = [classNames.heading, vl].filter(e => e).join(' ');

  return (
    <Element tagName={tagName} className={className} {...rest}>
      {children}
    </Element>
  );
};
export default Heading;
