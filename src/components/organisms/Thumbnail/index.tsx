import * as React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { Element } from '../../utils';

const styles: ThumbnailClassNames = require('./thumbnail.scss');

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
  onClick?: () => void;
}

const Thumbnail = (props: ThumbnailProps) => {
  const { width = 192, height = 192 } = props;

  return (
    <Element styles={styles.thumbnail} className={props.className} onClick={props.onClick}>
      <Image className={styles.image} src={props.src} width={width} height={height} />
      <Text className={styles.text}>{props.title}</Text>
    </Element>
  );
};

export default Thumbnail;
