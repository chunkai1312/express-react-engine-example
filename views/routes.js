import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './Layout';
import IndexPage from './IndexPage';
import ErrorPage from './ErrorPage';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={IndexPage} />
      <Route path='*' component={ErrorPage} />
    </Route>
  </Router>
);