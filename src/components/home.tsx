import React, { useCallback, useEffect } from 'react';
import { useRootState, useDispatch } from './app';
import * as actions from '../reducers';

const Home = () => {
  const rootState = useRootState();
  const dispatch = useDispatch();
  const onClickSelect = useCallback(name => dispatch(actions.select(name)), []);

  useEffect(() => {
    console.log(rootState.channels)
  }, [rootState.channels])

  return (
    <div>
      {Object.keys(rootState.channels)
        .filter(key => key.startsWith(rootState.filter) || rootState.filter === 'all')
        .map(key => {
          <div key={key} onClick={() => onClickSelect(key.split('.').slice(-1)[0])}>{rootState.channels[key].title}</div>;
        })}
    </div>
  );
};

export default Home;
