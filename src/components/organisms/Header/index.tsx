import * as React from 'react';
import Heading from '../../atoms/Heading';
import { ElementProps } from '../../utils';
import Anchor from '../../atoms/Anchor';

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
    <div className={styles.header}>
      <Anchor to="/">
        <Heading level={1} visualLevel={4} className={styles.logo} {...props}>
          {title}
        </Heading>
      </Anchor>
    </div>
  );
};

export default Header;
