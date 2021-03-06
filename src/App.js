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
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/half/" component={HalfWidthContentPage} />
      <Route path="/full/" component={FullWidthContentPage} />
    </>
  );
}

export default App;
