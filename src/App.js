import React from "react";
import "./scss/main.scss";
import HomePage from "./js/pages/HomePage";
import { HalfWidthContentPage, FullWidthContentPage } from "./js/pages";
import { Route } from "react-router-dom";
import $ from "jquery";

$(function() {
  $(document).scroll(function() {
    var $nav = $(".nav-wrapper");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

function App() {
  return (
    <>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/half/" component={HalfWidthContentPage} />
      <Route path="/full/" component={FullWidthContentPage} />
    </>
  );
}

export default App;
