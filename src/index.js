import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";
import Scene from "./scenes";
import "./styles-global/style.css";

const history = createHistory();

const renderFn = Component => {
  ReactDOM.render(
    <Router history={history}>
      <Component />
    </Router>,
    document.getElementById("root")
  );
};

renderFn(Scene);
if (module.hot) {
  module.hot.accept("./scenes/index.tsx", function () {
    renderFn(Scene);
  });
}
