import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LandingPage from "./landing-page";

const history = createHistory();

class Scene extends React.Component {
  render() {
    return (
      <div className="scene">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Scene;
