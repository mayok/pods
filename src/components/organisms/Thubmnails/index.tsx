import * as React from 'react';
import Thumbnail from '../Thumbnail';

interface Props {
  data: { src: string }[];
}

const Thumbnails = (props: Props) => {
  return (
    <div>
      {props.data.map(e => (
        <Thumbnail {...e} />
      ))}
    </div>
  );
};

export default Thumbnails;
