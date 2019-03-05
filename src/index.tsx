import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { getInitialState } from './reducers';

// get data from storage
ReactDOM.render(<App {...getInitialState()} />, document.querySelector('.app'));
