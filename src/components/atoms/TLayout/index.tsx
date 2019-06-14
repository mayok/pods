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
  header?: React.ReactNode;
  nav?: React.ReactNode;
  main?: React.ReactNode;
}

const TLayout = (props: Props) => {
  return (
    <Element styles={styles.root}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.body}>
        {props.nav}
        {props.main}
        <div />
      </div>
    </Element>
  );
};
export default TLayout;
