import React, { Component, Fragment } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {
  HashRouter as Router,
  Route,
  Routes as Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./packs/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./commun/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  {/* <Route exact path="/" element={<PrivateRoute />}> */}
                  <Route exact path="/" element={<Dashboard />} />
                  {/* </Route> */}
                  <Route path={"/register"} element={<Register />}></Route>
                  <Route path={"/login"} element={<Login />}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
const root = createRoot(document.getElementById("app"));
root.render(<App />);
