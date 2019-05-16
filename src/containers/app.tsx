import React, { Dispatch, useContext, useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from '../config.json';
import { fetchList } from '../provider/api';
import * as actions from '../reducers';
import { Action, reducer, RootState } from '../reducers';
import Content from './content';
import Home from './home';

const RootContext = React.createContext<RootState>(null as any);
const DispatchContext = React.createContext<Dispatch<Action>>(null as any);

export function useRootState(): RootState {
  return useContext(RootContext);
}

export function useDispatch() {
  return useContext(DispatchContext);
}

const App = (props: RootState) => {
  const [rootState, dispatch] = useReducer(reducer, props);

  useEffect(() => {
    // fetch channel groups
    const groups: { [key: string]: string[] } = {};
    Promise.all(
      config.paths.map(async path => {
        groups[path] = await fetchList(path);
        return groups;
      })
    )
      .then(groups => groups.reduce((acc, val) => Object.assign({}, acc, val), {}))
      .then(groups => {
        dispatch(actions.updateGroups(groups));
      });
  }, []);

  return (
    <RootContext.Provider value={rootState}>
      <DispatchContext.Provider value={dispatch}>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/:channel" render={props => <Content {...props} />} />
        </Switch>

        <canvas id="canvas" />
      </DispatchContext.Provider>
    </RootContext.Provider>
  );
};

export default App;
