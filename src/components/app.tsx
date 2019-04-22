import React, { Dispatch, useContext, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../config.json';
import { fetchList } from '../provider/api';
import * as actions from '../reducers';
import { Action, reducer, RootState } from '../reducers';
import Content from './content';
import Filter from './filter';
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
    <BrowserRouter>
      <RootContext.Provider value={rootState}>
        <DispatchContext.Provider value={dispatch}>
          <div>
            <Filter />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:channel" component={Content} />
            </Switch>
          </div>

          <canvas id="canvas" />
        </DispatchContext.Provider>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default App;
