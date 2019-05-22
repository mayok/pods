import * as React from 'react';
import Logo, { LogoClassName } from '../../atoms/Logo';
import { ElementProps } from '../../utils';

const styles: HeaderClassNames = require('./header.scss');

export interface HeaderClassNames extends LogoClassName {
  header?: string;
}

const Header = (props: ElementProps) => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} {...props}>
        {props.children}
      </Logo>
    </div>
  );
};

export default Header;
