import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import ViewIssue from "pages/ViewIssue";
import CreateIssue from "pages/CreateIssue";

export const history = createBrowserHistory();

const AppRoute = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Redirect exact from="/" to="/issues" />
          <Route exact path="/issues" component={ViewIssue} />
          <Route path="/issues/new" component={CreateIssue} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoute;
