import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ViewIssue from "pages/ViewIssue";
import CreateIssue from "pages/CreateIssue";
import LoginPage from "pages/LoginPage";
import NotFoundPage from "pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRoute = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute path="/issues" component={ViewIssue} />
          <PrivateRoute path="/issues/new" component={CreateIssue} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoute;
