import * as React from 'react';
import { Element } from '../../utils';
import ChannelItem, { ChannelItemProps } from '../ChannelItem';
const styles = require('./channel-list.scss');

export interface Props {
  data: ChannelItemProps[];
}

const ChannelList = (props: Props) => {
  return (
    <Element className={styles.root} {...props}>
      {props.data.map(e => (
        <ChannelItem key={e.title} className={styles.item} {...e} />
      ))}
    </Element>
  );
};
export default ChannelList;
