import React, { useCallback } from 'react';
import { useRootState, useDispatch } from './app';
import * as actions from '../reducers';

const Filter = () => {
  const rootState = useRootState();
  const dispatch = useDispatch();
  const onClickFiltering = useCallback(group => dispatch(actions.filtering(group)), []);

  return (
    <div>
      <h1>Channels</h1>
      <ul>
        {rootState.groups.map(group => (
          <li onClick={() => onClickFiltering(group)}>{group}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
