import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { withPage } from '@components/partials';
import { Home } from '@components/pages';

const redirectToHome = () => <Redirect to={'/Home'} />;

const routes = (
  <Switch>
    <Route path={'/'} exact component={redirectToHome} />
    <Route path={'/Home'} exact component={withPage(Home)} />
  </Switch>
);

export default routes;
