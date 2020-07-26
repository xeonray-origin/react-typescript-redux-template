import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { withPage } from '@components/partials';
import { Home, Products, Blogs, Dashboard } from '@components/pages';

const redirectToHome = () => <Redirect to={'/Home'} />;

const PageRoutes = (
  <Switch>
    <Route path={'/'} exact component={redirectToHome} />
    <Route path={'/Home'} exact component={withPage(Home)} />
    <Route path={'/Products'} exact component={withPage(Products)} />
    <Route path={'/Blogs'} exact component={withPage(Blogs)} />
    <Route path={'/Dashboard'} exact component={withPage(Dashboard)} />
  </Switch>
);

export default PageRoutes;
