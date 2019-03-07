import React from 'react';
import { useRootState, useDispatch } from './app';

const Channel = () => {
  const rootState = useRootState();
  const dispatch = useDispatch();

  if (rootState.channel === null) {
    return;
  }

  return (
    <div>
      {rootState.channels
        .filter(channel => channel.shortname === rootState.channel)
        .map(channel => (
          <div>
            <h1>{channel.title}</h1>
            <ul>
              {channel.contents.map(content => (
                <li>{content.url}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Channel;
