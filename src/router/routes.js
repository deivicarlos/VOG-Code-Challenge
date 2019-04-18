import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from '../features/login/containers/LoginContainer';
import DashboardContainer from '../features/dashboard/containers/DashboardContainer';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import PrivateRoute from './private-route';

const MainRoutes = () => (
  <Switch>
    <Route path="/" exact component={LoginContainer} />
    <PrivateRoute path="/dashboard" component={DashboardContainer} />
    <Route component={PageNotFound} />
  </Switch>
);

export default MainRoutes;
