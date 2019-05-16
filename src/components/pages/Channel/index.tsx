import * as React from 'react';
import AudioController from '../../organisms/AudioController';
import FilterButton from '../../organisms/FilterButton';
import Header from '../../organisms/Header';
import ChannelTemplate from '../../templates/ChannelTemplate';

export interface Props {}

const Channel = (props: Props) => {
  return <ChannelTemplate header={<Header />} nav={<FilterButton />} content={<div />} footer={<AudioController />} />;
};

export default Channel;
