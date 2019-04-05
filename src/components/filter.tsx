import React, { useCallback } from 'react';
import config from '../config.json';
import * as actions from '../reducers';
import { useDispatch } from './app';

const Filter = () => {
  const dispatch = useDispatch();
  const onClickFiltering = useCallback(group => dispatch(actions.filtering(group)), []);

  return (
    <div>
      <h1>Channels</h1>
      <ul>
        {[...config.paths, 'all'].map(path => (
          <li key={path} onClick={() => onClickFiltering(path)}>{path}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
