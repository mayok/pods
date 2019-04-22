import * as H from 'history';
import React, { useEffect } from 'react';
import { fetchContents } from '../provider/api';
import * as actions from '../reducers';
import { useDispatch, useRootState } from './app';

type Props = {
  history: H.History;
  location: H.Location<H.LocationState>;
};

const Content = ({ history, location }: Props) => {
  const rootState = useRootState();
  const dispatch = useDispatch();

  useEffect(() => {
    const group = rootState.channel.group;
    const name = rootState.channel.name;
    if (group && name) {
      fetchContents(group, name).then((response: actions.Channel) => {
        dispatch(actions.updateChannels(`${group}.${name}`, response));
      });
    }
  }, []);

  return (
    <div>
      <h2>
        {rootState.channel.group &&
          rootState.channels[`${rootState.channel.group}.${rootState.channel.name}`] &&
          rootState.channels[`${rootState.channel.group}.${rootState.channel.name}`].title}
      </h2>
      {/* {rootState.channels[location.pathname.split('/')[1]].contents.map(c => (
        <span>{c.name}</span>
      ))} */}
    </div>
  );
};

export default Content;
