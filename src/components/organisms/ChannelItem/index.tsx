import * as React from 'react';
import MediaObjectLayout from '../../atoms/MediaObjectLayout';
import Icon from '../../atoms/Icon';
import { ElementProps } from '../../utils';
import Text from '../../atoms/Text';
const styles: ChannelItemClassname = require('./channel-item.scss');

export interface ChannelItemClassname {
  item?: string;
  icon?: string;
  title?: string;
  time?: string;
}

export interface ChannelItemProps extends ElementProps {
  src?: string;
  title?: string;
  time?: string;
}

const ChannelItem = (props: ChannelItemProps) => {
  return (
    <MediaObjectLayout styles={styles.item} className={props.className}>
      <Icon src={props.src} className={styles.icon} />
      <Text className={styles.title}>{props.title}</Text>
      <Text className={styles.time}>{props.time}</Text>
    </MediaObjectLayout>
  );
};

export default ChannelItem;
