import React, { Dispatch, useContext, useEffect, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import config from '../config.json';
import { fetchContents, fetchList } from '../provider/api';
import * as actions from '../reducers';
import { Action, Channel, reducer, RootState } from '../reducers';
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
    // fetch channel group
    const groups: { [key: string]: string[] } = {};
    config.paths.forEach(async path => {
      const group = await fetchList(path);
      dispatch(actions.updateGroups(path, group));
      groups[path] = group;
    });

    // fetch conents if it is outdated
    Object.keys(groups).forEach(group => {
      groups[group].forEach(shortname => {
        // todo: compare channels last_updated and todays date
        // const last_updated = rootState.channels[`${group}.${shortname}`].last_updated;
        // const today = new Date().toISOString();

        // if shortname not in rootState.channels OR, outdated
        if (!Object.keys(rootState.channels).includes(`${group}.${shortname}`)) {
          fetchContents(group, shortname).then((response: Channel) => {
            dispatch(actions.updateChannels(`${group}.${shortname}`, response));
          });
        }
      });
    });
  }, []);

  // todo: use worker to fetch content limiging concurrency request
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
    <BrowserRouter>
      <RootContext.Provider value={rootState}>
        <DispatchContext.Provider value={dispatch}>
          <div>
            <Filter />

            <Route exact path="/" component={Home} />
            {/* <Route path="/:channel" component={Channel} /> */}
          </div>
        </DispatchContext.Provider>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default App;
