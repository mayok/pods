import * as React from 'react';
import { Link } from 'react-router-dom';

const LogoClass: LogoClassnames = require('./logo.scss');

interface Props {
  classNames?: LogoClassnames;
}

export interface LogoClassnames {
  logo: string;
}

const Logo = (props: Props) => {
  const classNames = props.classNames || LogoClass;

  return (
    <Link className={classNames.logo} to="/">
      <span>logo</span>
    </Link>
  );
};

export default Logo;
