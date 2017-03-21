import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';

import { About, Archive, Contact, Home, Welcome } from './components';
import { AddGameContainer, GamesContainer } from './containers';

import configureStore from './store';

const store = configureStore();

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Route>

      <Route path="/games" component={Archive}>
        <IndexRoute component={GamesContainer} />
        <Route path="add" component={AddGameContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
