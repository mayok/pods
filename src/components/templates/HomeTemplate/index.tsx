import * as React from 'react';
import ThumbnailList from '../../organisms/ThubmnailList';
import { IListItem } from '../../../repository';

export interface Props {
  data?: IListItem[];
  filter?: string;
  onClick?: (key: string) => void;
}

const HomeTemplate = (props: Props) => {
  return <ThumbnailList data={props.data} filter={props.filter} onClick={props.onClick} />;
};

export default HomeTemplate;
