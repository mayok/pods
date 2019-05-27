import * as React from 'react';
import { ElementProps } from '../../utils';
import Image from '../Image';
const styles: IconClassName = require('./icon.scss');

export interface IconClassName {
  icon?: string;
}

export interface IconProps extends ElementProps {
  src?: string;
  width?: number;
  height?: number;
}

const Icon = (props: IconProps) => {
  const { src = '', width = 20, height = 20, ...rest } = props;

  return <Image src={src} styles={styles.icon} width={width} height={height} {...rest} />;
};

export default Icon;
