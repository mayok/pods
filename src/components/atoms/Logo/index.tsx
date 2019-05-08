import * as React from 'react';
import { Link } from 'react-router-dom';
import { ElementProps } from '../../utils';

const logoClassNames: LogoClassNames = require('./logo.scss');

interface Props extends ElementProps {
  classNames?: LogoClassNames;
}

export interface LogoClassNames {
  logo?: string;
}

const Logo = (props: Props) => {
  const classNames = props.classNames || {};

  return (
    <Link className={classNames.logo} to="/">
      <span>logo</span>
    </Link>
  );
};

export default Logo;
