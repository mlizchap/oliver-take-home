import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import UserView from "./Components/UserView";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
