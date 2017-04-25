import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Redirect, Router } from 'react-router';
import App from './App';
import NotFound from '../components/NotFound';
import HelloWorld from '../components/HelloWorld';
import BlogList from '../components/BlogList';
import Present from '../components/Present';
import Blog from '../components/Blog';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Present} />
            <Route component={HelloWorld} path="/hello" />
            <Route component={BlogList} path="/blog-list" />
            <Route component={Blog} path="/blog/:id" />
            <Route component={NotFound} path="*" />
          </Route>
        </Router>
      </Provider>
    )
  }
}
