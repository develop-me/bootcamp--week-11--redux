import React from "react";

import {
  Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Value from "./Value";
import Buttons from "./Buttons";
import Settings from "./Settings";

const App = () => (
  <Router>
    <React.Fragment>
      <h1>
        <Link to="/">iCounter 2.0</Link>
      </h1>

      <Switch>
        <Route exact path="/" render={ () => (
          <React.Fragment>
            <p><Link to="/settings">Settings</Link></p>
            <Value />
            <Buttons/>
          </React.Fragment>
        )}/ >

        <Route exact path="/settings" component={ Settings } />

        <p>Nothing found.</p>
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
