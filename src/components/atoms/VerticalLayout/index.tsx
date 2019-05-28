import * as React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: verticalLayoutClassName = require('./vertical-layout.scss');

export interface verticalLayoutClassName {
  root?: string;
}

export interface Props extends ElementProps {
  children: React.ReactNode;
}

const VerticalLayout = (props: Props) => {
  return (
    <Element styles={styles.root} {...props}>
      {React.Children.map(props.children, child => child)}
    </Element>
  );
};
export default VerticalLayout;
