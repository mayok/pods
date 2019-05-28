import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from './config.json';
import Home from './components/pages/Home';
import Channel from './components/pages/Channel';

const App = () => {
  // leading slash, but no trailing slash
  const basename = '/' + config.basename.split('/').filter((e: string) => e)[0];

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/:channel" render={() => <Channel />} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('.app'));
