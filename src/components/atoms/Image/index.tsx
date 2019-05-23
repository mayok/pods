import * as React from 'react';
import { ElementProps, Element } from '../../utils';
const styles: ImageClassName = require('./image.scss');

export interface ImageClassName {
  image?: string;
}

export interface ImageProps extends ElementProps {
  src: string;
}

const Image = (props: ImageProps) => {
  return <Element tagName="img" classNames={styles.image} {...props} />;
};

export default Image;
