import * as React from 'react';
import Thumbnail, { ThumbnailProps } from '../Thumbnail';
import { Element } from '../../utils';
import { IListItem } from '../../../repository';
import { Link } from 'react-router-dom';
const styles: ThumbnailListClassName = require('./thumbnailList.scss');

export interface ThumbnailListClassName {
  root?: string;
  thumbnail?: string;
}

interface Props {
  data?: IListItem[];
  filter?: string;
  onClick?: (title: string) => void;
}

const ThumbnailList = (props: Props) => {
  return (
    <Element styles={styles.root}>
      {props.data &&
        props.data
          .filter(e => props.filter === e.group || !props.filter)
          .map(e => (
            <Link to={`/${e.group}/${e.shortname}`} key={e.shortname}>
              <Thumbnail
                className={styles.thumbnail}
                src=""
                onClick={() => {
                  props.onClick!(e.shortname);
                }}
                width={192}
                height={192}
              />
            </Link>
          ))}
    </Element>
  );
};

export default ThumbnailList;
