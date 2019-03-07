import React, { useCallback } from 'react';
import { useRootState, useDispatch } from './app';
import * as actions from '../reducers';

const Home = () => {
  const rootState = useRootState();
  const dispatch = useDispatch();
  const onClickSelect = useCallback(name => dispatch(actions.select(name)), []);

  return (
    <div>
      {rootState.channels
        .filter(channel => channel.group === rootState.filter || rootState.filter === 'all')
        .map(c => {
          <div onClick={() => onClickSelect(c.shortname)}>{c.title}</div>;
        })}
    </div>
  );
};

export default Home;
