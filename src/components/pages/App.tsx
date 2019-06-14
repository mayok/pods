import AppTemplate from '../templates/AppTemplate';
import { RootStore } from '../..';
import React, { useContext, useEffect } from 'react';
import Channel from './Channel';
import Home from './Home';
import { observer } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import config from '../../config.json';

interface Props {}

// const App = observer((props: Props) => {
//   const store = useContext(RootStore);

//   useEffect(() => {});

//   return (
//     <>{store.appStore.component === 'home' ? <AppTemplate Component={Home} /> : <AppTemplate Component={Channel} />}</>
//   );
// });

const App = observer(() => {
  // leading slash, but no trailing slash
  const basename = config.basename.split('/').filter((e: string) => e)[0] || '';

  return (
    <BrowserRouter basename={`/${basename}`}>
      <Switch>
        <Route exact path="/" render={() => <AppTemplate Component={Home} />} />
        <Route
          path="/:group/:channel"
          render={({ location }) => <AppTemplate Component={Channel} location={location} />}
        />
      </Switch>
    </BrowserRouter>
  );
});

export default App;
