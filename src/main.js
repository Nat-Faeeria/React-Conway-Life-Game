import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Game } from './components/game';

export function init() {
  ReactDOM.render(<Game />, document.getElementById('app'));
}
