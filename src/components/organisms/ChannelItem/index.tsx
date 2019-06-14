import * as React from 'react';
import MediaObjectLayout from '../../atoms/MediaObjectLayout';
import Icon from '../../atoms/Icon';
import { ElementProps } from '../../utils';
import Text from '../../atoms/Text';
import { IContent } from '../../../store/channel';
const styles: ChannelItemClassname = require('./channel-item.scss');

export interface ChannelItemClassname {
  item?: string;
  icon?: string;
  title?: string;
  time?: string;
}

// export interface ChannelItemProps extends ElementProps {
//   src?: string;
//   title?: string;
//   time?: string;
// }
export interface Props extends IContent, ElementProps {}

const ChannelItem = (props: Props) => {
  return (
    <MediaObjectLayout styles={styles.item} className={props.className}>
      <Icon src={props.url} className={styles.icon} />
      <Text className={styles.title}>{props.name}</Text>
      <Text className={styles.time}>{props.date}</Text>
    </MediaObjectLayout>
  );
};

export default ChannelItem;
