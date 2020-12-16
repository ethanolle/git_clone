import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalFeed from "../pages/globalFeed/index";
import Article from "../pages/articles/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={GlobalFeed} />
        <Route path='/articles/:slug' component={Article} />
      </Switch>
    </Router>
  );
};
export default Routes;
