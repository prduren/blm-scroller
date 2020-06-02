import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "./pages";

const Routes = (
  <Switch>
    <Route path="/" exact>
      <IndexPage />
    </Route>
  </Switch>
);
export default Routes;
