import React from 'react';
import { Route, Switch } from 'react-router-dom';
// pages
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { SignIn } from '../pages/signIn';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signin" component={SignIn} />

  </Switch>
);
