import React from "react";
import "./scss/home.scss";
import HomePage from "./js/HomePage";
import ContentPage from "./js/ContentPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/p" component={ContentPage} />
    </Router>
  );
}

export default App;
