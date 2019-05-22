import * as React from 'react';

const ThumbnailClass: ThumbnailClassNames = require('./thumbnail.scss');

export interface ThumbnailClassNames {
  thumbnail: string;
  image: string;
}

interface Props {
  src?: string;
  onClick?: () => void;
}

const Thumbnail = (props: Props) => {
  return (
    <div className={ThumbnailClass.thumbnail}>
      <img onClick={props.onClick} className={ThumbnailClass.image} src={props.src} />
    </div>
  );
};

export default Thumbnail;
