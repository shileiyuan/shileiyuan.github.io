import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Redirect, Router } from 'react-router';
import App from './App';
import NotFound from '../components/NotFound';

const Main = ({children}) => children;

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Main}>
            <IndexRoute component={App} />
            <Route component={NotFound} path="*" />
          </Route>
        </Router>
      </Provider>
    )
  }
}
