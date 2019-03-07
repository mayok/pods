import React, { useReducer, Dispatch, useContext, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import Channel from './channel';
import Filter from './filter';
import { reducer, RootState, Action } from '../reducers';

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
    // fetch channel list
    // fetch conents if it is outdated
  }, []);

  return (
    <BrowserRouter>
      <RootContext.Provider value={rootState}>
        <DispatchContext.Provider value={dispatch}>
          <div>
            <Filter />

            <Route exact path="/" component={Home} />
            <Route path="/:channel" component={Channel} />
          </div>
        </DispatchContext.Provider>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default App;
