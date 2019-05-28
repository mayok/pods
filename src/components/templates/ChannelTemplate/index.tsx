import * as React from 'react';
import Header from '../../organisms/Header';
import NavigationBar from '../../organisms/NavigationBar';
import ChannelList from '../../organisms/ChannelList';
import TLayout from '../../atoms/TLayout';

export interface Props {
  data?: any;
}

const ChannelTemplate = ({ data }: Props) => {
  return (
    <TLayout>
      <Header />
      <NavigationBar />
      <ChannelList data={[]} />
    </TLayout>
  );
};

export default ChannelTemplate;
