import React, { Dispatch, useContext, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../config.json';
import { fetchContents, fetchList } from '../provider/api';
import * as actions from '../reducers';
import { Action, Channel, reducer, RootState } from '../reducers';
import Filter from './filter';
import Home from './home';
import console = require('console');

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

  useEffect(() => {
    Object.keys(rootState.groups).forEach(group => {
      rootState.groups[group].forEach(shortname => {
        // todo: compare channels last_updated and todays date
        // const last_updated = rootState.channels[`${group}.${shortname}`].last_updated;
        // const today = new Date().toISOString();

        if (!Object.keys(rootState.channels).includes(`${group}.${shortname}`)) {
          fetchContents(group, shortname).then((response: Channel) => {
            dispatch(actions.updateChannels(`${group}.${shortname}`, response));
            console.log(rootState.channels);
          });
        }
      });
    });
  }, [rootState.groups]);

  // todo: use worker to fetch content limiting concurrency request
  // useEffect(() => {
  //   if (rootState.running_process <= config.concurrency && rootState.queue.length > 0) {
  //     dispatch(actions.incrementRunningProcess());
  //     worker.postMessage(queue.pop());

  //     worker.onmessage = function(e) {
  //       dispatch(actions.updateChannels(e.data));
  //       dispatch(actions.decrementRunningProcess());
  //     };
  //   }
  // }, [rootState.queue]);

  return (
    <BrowserRouter basename={config.subdirectory}>
      <RootContext.Provider value={rootState}>
        <DispatchContext.Provider value={dispatch}>
          <div>
            <Filter />

            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/:channel" component={Channel} /> */}
            </Switch>
          </div>
        </DispatchContext.Provider>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default App;
