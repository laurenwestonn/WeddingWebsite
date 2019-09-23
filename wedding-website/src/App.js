import React from "react";
import "./scss/home.scss";
import HomePage from "./js/pages/HomePage";
import ContentPage from "./js/ContentPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/p/" component={ContentPage} />
    </>
  );
}

export default App;
