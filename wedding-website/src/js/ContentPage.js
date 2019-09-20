import React from "react";
import RSVP from "./RSVP";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function ContentPage() {
  return (
    <Router>
      <Header />
      <Route exact={true} path="/p/rsvp" component={RSVP} />
      <Footer />
    </Router>
  );
}

export default ContentPage;
