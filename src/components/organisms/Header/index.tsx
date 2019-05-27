import * as React from 'react';
import Anchor from '../../atoms/Anchor';
import Heading from '../../atoms/Heading';
import { Element, ElementProps } from '../../utils';

const styles: HeaderClassName = require('./header.scss');

export interface HeaderClassName {
  header?: string;
  logo?: string;
}

export interface HeaderProps extends ElementProps {
  title?: string;
}

const Header = (props: HeaderProps) => {
  const { title = 'Pods ' } = props;

  return (
    <Element styles={styles.header} {...props}>
      <Anchor to="/">
        <Heading level={1} visualLevel={4} className={styles.logo} {...props}>
          {title}
        </Heading>
      </Anchor>
    </Element>
  );
};

export default Header;
