import React, { useState, useEffect } from 'react';
import ChannelTemplate from '../../templates/ChannelTemplate';

interface Props {}

const Channel = (props: Props) => {
  const [channel, setChannel] = useState();
  useEffect(() => {
    // get data from storage, api
  });

  // pass props: NavBar onClick, channel play/stop click handler, data
  return <ChannelTemplate />;
};

export default Channel;
