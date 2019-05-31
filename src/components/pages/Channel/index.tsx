import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../..';
import ChannelTemplate from '../../templates/ChannelTemplate';

interface Props {}

const Channel = (props: Props) => {
  const context = useContext(MyContext);
  const [channel, setChannel] = useState(() => {
    const s = context.repository.contents();
    return s;
  });

  useEffect(() => {
    // get data from storage, api
    // context.provider.contents()
    // if update:
    //   setChannel()
    //   context.repository.setContents()
  });

  // pass props: NavBar onClick, channel play/stop click handler, data
  return <ChannelTemplate />;
};

export default Channel;
