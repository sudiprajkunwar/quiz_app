import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../components//pages/welcome";
import Home from "../components/pages/home";
import { Background } from "../components/molecules";
import Quiz from "../components/pages/quiz";

const Routing = () => {
  return (
    <Router>
      <Background />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/welcome/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
};

export default Routing;
