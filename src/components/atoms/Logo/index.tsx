import * as React from 'react';
import { ElementProps } from '../../utils';
import Heading, { HeadingClassName } from '../Heading';
const styles: LogoClassName = require('./logo.scss');

export interface LogoClassName extends HeadingClassName {
  logo?: string;
}

const Logo = (props: ElementProps) => {
  const { ...rest } = props;

  return (
    <Heading level={1} styles={styles.logo} {...rest}>
      {props.children}
    </Heading>
  );
};

export default Logo;
