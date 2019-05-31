import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Channel from './components/pages/Channel';
import Home from './components/pages/Home';
import config from './config.json';
import { provider } from './provider';
import { repository } from './repository';
import appStore from './store/app';
import homeStore from './store/home';
import channelStore from './store/channel';
import App from './components/pages/App';

const stores = {
  appStore,
  homeStore,
  channelStore,
};

export const MyContext = React.createContext({ repository, provider });
export const RootStore = React.createContext({ ...stores });

// const App = () => {
//   // leading slash, but no trailing slash
//   const basename = '/' + config.basename.split('/').filter((e: string) => e)[0];

//   return (
//     <BrowserRouter basename={basename}>
//       <Switch>
//         <Route exact path="/" render={() => <Home />} />
//         <Route path="/:channel" render={() => <Channel />} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

ReactDOM.render(<App />, document.querySelector('.app'));
