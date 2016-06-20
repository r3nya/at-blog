import React from 'react';
import { Route, Redirect } from 'react-router';

import { App } from 'containers/layout';
import Home from 'containers/Home';
import About from 'containers/About';
import Services from 'containers/Services';
import Contacts from 'containers/Contacts';

import NotFoundPage from 'containers/NotFoundPage';

export default (
  <Route>
    <Redirect from="/" to="/home" />

    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="services" component={Services} />
      <Route path="contacts" component={Contacts} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
);
