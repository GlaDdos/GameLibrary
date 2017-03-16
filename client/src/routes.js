import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';

import { About, Archive, Contact, Home, Welcome } from './components';
import { AddGameContainer, GamesContainer } from './containers';

const routes = (
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
);

export default routes;
