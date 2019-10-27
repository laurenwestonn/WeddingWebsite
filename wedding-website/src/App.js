import React from "react";
import "./scss/main.scss";
import HomePage from "./js/pages/HomePage";
import { ContentPage, FullWidthContentPage } from "./js/pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/p/" component={ContentPage} />
      <Route path="/full-width/" component={FullWidthContentPage} />
    </>
  );
}

export default App;
