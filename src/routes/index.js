import { AUTH_REDIRECT_URL } from 'common/api/axiosInstance';
import { API_ACCESS_TOKEN } from 'common/api/const';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

import Discover from './Discover';

export default function Routes() {
  // Here you'd return an array of routes

  const location = useLocation();

  if (location.hash) {
    const { access_token: token } = queryString.parse(location.hash);
    localStorage.setItem(API_ACCESS_TOKEN, token);
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (window.location = AUTH_REDIRECT_URL)}
      />

      <Route path="/discover">
        <Discover />
      </Route>
      <Route render={() => <div>404 Not found </div>} />
    </Switch>
  );
}
