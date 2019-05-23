import * as React from 'react';
import { ElementProps, Element } from '../../utils';
const styles: ImageClassName = require('./image.scss');

export interface ImageClassName {
  image?: string;
}

export interface ImageProps extends ElementProps {
  src: string;
  width?: number;
  height?: number;
}

const Image = (props: ImageProps) => {
  const { width = 72, height = 72 } = props;
  return <Element tagName="img" classNames={styles.image} width={width} height={height} {...props} />;
};

export default Image;
