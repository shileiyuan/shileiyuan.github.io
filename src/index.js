import React from 'react';
import { render } from 'react-dom';
import '../assets/styles/index.scss'
import configureStore from './configures/configureStore';
import Root from './containers/Root';
import history from './configures/configHistory';

const store = configureStore();

render(
  <Root store={store} history={history} />,
  document.getElementById('app-root')
);
