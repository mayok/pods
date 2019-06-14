import * as H from 'history';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { MyContext, RootStore } from '../..';
import HomeTemplate from '../templates/HomeTemplate';

interface Props {
  location?: H.Location<H.LocationState>;
}

const Home = observer((props: Props) => {
  const context = useContext(MyContext);
  const store = useContext(RootStore);

  const onClick = (name: string) => {
    store.channelStore.setChannelName(name);
  };

  useEffect(() => {
    store.homeStore.updateList();
  }, []);

  return <HomeTemplate data={store.homeStore.list} onClick={onClick} filter={store.homeStore.filter} />;
});

export default Home;
