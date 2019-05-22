import * as React from 'react';
import { Element } from '../../utils';
const styles: IconClassName = require('./icon.scss');

export interface IconClassName {
  icon?: string;
}

export interface IconProps {
  children?: string;
  onClick?: () => void;
}

const Icon = (props: IconProps) => {
  const { children = undefined, ...rest } = props;

  return (
    <Element className={styles.icon} {...rest}>
      {children}
    </Element>
  );
};

export default Icon;
