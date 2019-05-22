import * as React from 'react';
import { Link } from 'react-router-dom';
import Heading, { HeadingClassName } from '../Heading';
import { ElementProps } from '../../utils';
const styles: LogoClassName = require('./logo.scss');

export interface LogoClassName extends HeadingClassName {
  logo?: string;
}

const Logo = (props: ElementProps) => {
  const { ...rest } = props;

  return (
    <Link to="/">
      <Heading level={1} className={styles.logo} {...rest}>
        {props.children}
      </Heading>
    </Link>
  );
};

export default Logo;
