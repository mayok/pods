import * as React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { Element } from '../../utils';

const thumbnailClass: ThumbnailClassNames = require('./thumbnail.scss');

export interface ThumbnailClassNames {
  thumbnail?: string;
  image?: string;
  text?: string;
}

export interface ThumbnailProps {
  src: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Thumbnail = (props: ThumbnailProps) => {
  const { width = 192, height = 192 } = props;

  return (
    <Element classNames={thumbnailClass.thumbnail} className={props.className}>
      <Image classNames={thumbnailClass.image} src={props.src} width={width} height={height} />
      <Text classNames={thumbnailClass.text}>{props.title}</Text>
    </Element>
  );
};

export default Thumbnail;
