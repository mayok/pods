import * as React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: verticalLayoutClassName = require('./vertical-layout.scss');

export interface verticalLayoutClassName {
  root?: string;
}

export interface Props extends ElementProps {
  children: React.ReactNodeArray;
}

const VerticalLayout = (props: Props) => {
  return (
    <Element styles={styles.root} {...props}>
      {props.children.map(e => e)}
    </Element>
  );
};
export default VerticalLayout;
