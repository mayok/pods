import * as React from 'react';
import Thumbnail, { ThumbnailProps } from '../Thumbnail';
import { Element } from '../../utils';
const styles: ThumbnailListClassName = require('./thumbnailList.scss');

export interface ThumbnailListClassName {
  root?: string;
  thumbnail?: string;
}

interface Props {
  data: ThumbnailProps[];
  filter?: string;
  onClick?: (title: string) => void;
}

const ThumbnailList = (props: Props) => {
  return (
    <Element styles={styles.root}>
      {props.data
        .filter(e => props.filter == e.title || !!props.filter)
        .map(e => (
          <Thumbnail
            key={e.title}
            className={styles.thumbnail}
            src={e.src}
            onClick={() => {
              props.onClick!(e.title!);
            }}
            width={192}
            height={192}
          />
        ))}
    </Element>
  );
};

export default ThumbnailList;
