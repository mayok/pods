import * as H from 'history';
import React, { useEffect } from 'react';
import { useRootState } from './app';
import Thumbnail from './thumbnail';

type Props = {
  history: H.History;
};

const Home = ({ history }: Props) => {
  const rootState = useRootState();

  useEffect(() => {
    console.log(rootState.channels);
  }, [rootState.channels]);

  return (
    <div>
      {Object.keys(rootState.channels)
        .filter(key => key.startsWith(rootState.filter) || rootState.filter === 'all')
        .map(key => (
          <Thumbnail key={key} shortname={key} history={history} />
        ))}
    </div>
  );
};

export default Home;
