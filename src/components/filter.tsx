import React, { useCallback } from 'react';
import { useRootState, useDispatch } from './app';
import * as actions from '../reducers';
import config from '../config.json';

const Filter = () => {
  const rootState = useRootState();
  const dispatch = useDispatch();
  const onClickFiltering = useCallback(group => dispatch(actions.filtering(group)), []);

  return (
    <div>
      <h1>Channels</h1>
      <ul>
        {[...config.paths, 'all'].map(path => (
          <li onClick={() => onClickFiltering(path)}>{path}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
