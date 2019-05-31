import React, { useContext } from 'react';
import TLayout from '../../atoms/TLayout';
import Header from '../../organisms/Header';
import NavigationBar from '../../organisms/NavigationBar';
import Channel from '../../pages/Channel';
import Home from '../../pages/Home';
import HomeTemplate from '../HomeTemplate';
import ChannelTemplate from '../ChannelTemplate';
import { RootStore } from '../../..';

// type MyComponent = typeof HomeTemplate | typeof ChannelTemplate;
type MyComponent = typeof Home | typeof Channel;
export interface Props {
  Component: MyComponent;
}

const AppTemplate = ({ Component }: Props) => {
  const store = useContext(RootStore);

  return (
    <TLayout>
      <Header />

      {/* props: onClick */}
      <NavigationBar />
      <Component />
    </TLayout>
  );
};

export default AppTemplate;
