import * as React from 'react';
import { Link } from 'react-router-dom';

const ThumbnailClass: ThumbnailClassNames = require('./thumbnail.scss');

export interface ThumbnailClassNames {
  thumbnail: string;
  image: string;
}

interface Props {
  location: string;
  imageSrc?: string;
}

const Thumbnail = (props: Props) => {
  return (
    <Link to={props.location}>
      <div className={ThumbnailClass.thumbnail}>
        <img className={ThumbnailClass.image} src={props.imageSrc} />
      </div>
    </Link>
  );
};

export default Thumbnail;
