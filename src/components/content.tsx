import * as H from 'history';
import React from 'react';
import { useRootState } from './app';

type Props = {
  history: H.History;
  location: H.Location<H.LocationState>;
};

const Content = ({ history, location }: Props) => {
  const rootState = useRootState();

  return (
    <div>
      <h2>{rootState.channels[location.pathname.split('/')[1]].title}</h2>
      {rootState.channels[location.pathname.split('/')[1]].contents.map(c => (
        <span>{c.name}</span>
      ))}
    </div>
  );
};

export default Content;
