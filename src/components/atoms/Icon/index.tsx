import * as React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: IconClassName = require('./icon.scss');

export interface IconClassName {
  icon?: string;
}

const Icon = (props: ElementProps) => {
  const { children = undefined, ...rest } = props;

  return (
    <Element classNames={styles.icon} {...rest}>
      {children}
    </Element>
  );
};

export default Icon;
