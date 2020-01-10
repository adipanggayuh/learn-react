import React from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
const App = () => (
  <div
    style={{ display: "flex", flexDirection: "column", background: "white" }}
  >
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
