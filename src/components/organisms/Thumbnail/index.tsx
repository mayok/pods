import * as React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { Element } from '../../utils';

const thumbnailClass: ThumbnailClassNames = require('./thumbnail.scss');

export interface ThumbnailClassNames {
  thumbnail: string;
  image: string;
}

export interface ThumbnailProps {
  src: string;
  title?: string;
  className?: string;
}

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <Element classNames={thumbnailClass.thumbnail} className={props.className}>
      <Image src={props.src} />
      <Text>{props.title}</Text>
    </Element>
  );
};

export default Thumbnail;
