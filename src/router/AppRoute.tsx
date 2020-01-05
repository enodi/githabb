import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import IssuePage from "pages/IssuesPage/IssuePage";

export const history = createBrowserHistory();

const AppRoute = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Redirect exact from="/" to="/issues" />
          <Route exact path="/issues" component={IssuePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoute;
