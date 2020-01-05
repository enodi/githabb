import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "store/configureStore";
import App, { history } from "router/AppRoute";
import { firebase } from "./firebase/firebase";
import { login, logout } from "actions/auth";
import Loader from "components/Loader";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<Loader />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/issues");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
