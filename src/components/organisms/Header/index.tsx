import * as React from 'react';
import Logo from '../../atoms/Logo';

const HeaderClass: HeaderClassNames = require('./header.scss');

export interface HeaderClassNames {
  header?: string;
  logo?: string;
}

interface Props {
  classNames?: HeaderClassNames;
}

const Header = (props: Props) => {
  const classNames = props.classNames || HeaderClass;

  return (
    <div className={classNames.header}>
      <Logo classNames={classNames} />
    </div>
  );
};

export default Header;
