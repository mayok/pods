import * as React from 'react';
import Thumbnail, { ThumbnailProps } from '../Thumbnail';
const styles: ThumbnailListClassName = require('./thumbnailList.scss');

export interface ThumbnailListClassName {
  root?: string;
  thumbnail?: string;
}

interface Props {
  data: ThumbnailProps[];
}

const ThumbnailList = (props: Props) => {
  return (
    <div className={styles.root}>
      {props.data.map(e => (
        <Thumbnail key={e.title} {...e} className={styles.thumbnail} width={192} height={192} />
      ))}
    </div>
  );
};

export default ThumbnailList;
