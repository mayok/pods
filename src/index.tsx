import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import config from './config.json';
import App from './containers/app';
import { getInitialState } from './reducers';

// leading slash, but no trailing slash
const basename = '/' + config.basename.split('/').filter((e: string) => e)[0];

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App {...getInitialState()} />
  </BrowserRouter>,
  document.querySelector('.app')
);
