import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./pages";
import AboutPage from "./pages/about";
import DonatePage from "./pages/donate";

const Routes = (
  <Layout>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/donate">
        <DonatePage />
      </Route>
    </Switch>
  </Layout>
);
export default Routes;
