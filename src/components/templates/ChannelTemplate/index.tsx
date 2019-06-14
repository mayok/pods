import React from 'react';
import { IChannel } from '../../../store/channel';
import Image from '../../atoms/Image';
import MediaObjectLayout from '../../atoms/MediaObjectLayout';
import Text from '../../atoms/Text';
import ChannelList from '../../organisms/ChannelList';

export interface Props {
  data?: IChannel;
}

const ChannelTemplate = ({ data }: Props) => {
  // if data is undefined
  if (!data) return <div />;

  return (
    <div>
      <MediaObjectLayout>
        <Image src="" />
        <Text>{data.title}</Text>
      </MediaObjectLayout>
      <ChannelList data={data.contents} />
      {/* footer */}
    </div>
  );
};

export default ChannelTemplate;
