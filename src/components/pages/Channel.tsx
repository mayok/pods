import * as H from 'history';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { MyContext, RootStore } from '../..';
import ChannelTemplate from '../templates/ChannelTemplate';

interface Props {
  location: H.Location<H.LocationState>;
}

const Channel = observer((props: Props) => {
  const context = useContext(MyContext);
  const store = useContext(RootStore);

  useEffect(() => {
    // get data from location
    // do something
    // const [group, shortname] = props.location.pathname.split('/').filter(e => e);
    // store.channelStore.updateChannel(group, shortname);
    return () => {
      store.channelStore.clear();
    };
  }, []);

  const [group, shortname] = props.location.pathname.split('/').filter(e => e);
  store.channelStore.setChannel(group, shortname);

  // pass props: play/stop click handler, data
  return <ChannelTemplate data={store.channelStore.channel} />;
});

export default Channel;
