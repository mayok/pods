import * as React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: tLayoutClassNames = require('./t-layout.scss');

export interface tLayoutClassNames {
  root?: string;
  header?: string;
  nav?: string;
  body?: string;
}

export interface Props extends ElementProps {
  children: React.ReactNodeArray;
}

const TLayout = (props: Props) => {
  return (
    <Element styles={styles.root} {...props}>
      <div className={styles.header}>{props.children[0]}</div>
      <div className={styles.nav}>{props.children[1]}</div>
      <div className={styles.body}>{props.children.slice(2)}</div>
    </Element>
  );
};
export default TLayout;
