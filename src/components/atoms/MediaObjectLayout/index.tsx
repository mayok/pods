import * as React from 'react';
import { Element, ElementProps } from '../../utils';
const styles: mediaObjectLayoutClassName = require('./media-object-layout.scss');

export interface mediaObjectLayoutClassName {
  root?: string;
  media?: string;
  body?: string;
}

export interface Props extends ElementProps {
  children: React.ReactNodeArray;
}

const MediaObjectLayout = (props: Props) => {
  return (
    <Element styles={styles.root} {...props}>
      <div className={styles.media}>{props.children[0]}</div>
      <div className={styles.body}>{props.children.slice(1)}</div>
    </Element>
  );
};
export default MediaObjectLayout;
