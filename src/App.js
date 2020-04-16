import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import UserList from "./Components/UserList";
import UserDetail from "./Components/UserDetail";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/user/:id" render={props => <UserDetail {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
