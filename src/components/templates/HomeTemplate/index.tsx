import * as React from 'react';
import ThumbnailList from '../../organisms/ThubmnailList';

export interface Props {
  data?: any;
  filter?: string;
  onClick?: (key: string) => void;
}

const HomeTemplate = (props: Props) => {
  return <ThumbnailList data={props.data} filter={props.filter} onClick={props.onClick} />;
};

export default HomeTemplate;
