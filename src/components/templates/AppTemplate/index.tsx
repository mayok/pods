import React, { useContext } from 'react';
import { RootStore } from '../../..';
import TLayout from '../../atoms/TLayout';
import Header from '../../organisms/Header';
import NavigationBar from '../../organisms/NavigationBar';
import Channel from '../../pages/Channel';
import Home from '../../pages/Home';
import * as H from 'history';

// type MyComponent = typeof HomeTemplate | typeof ChannelTemplate;
type MyComponent = typeof Home | typeof Channel;
export interface Props {
  Component: MyComponent;
  location?: H.Location<H.LocationState>;
}

const AppTemplate = ({ Component, location }: Props) => {
  const store = useContext(RootStore);

  return <TLayout header={<Header />} nav={<NavigationBar />} main={<Component location={location!} />} />;
};

export default AppTemplate;
