import React from "react";
import RSVP from "./pages/RSVP";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Route } from "react-router-dom";

function ContentPage() {
  return (
    <>
      <Header />
      <Route exact={true} path="/rsvp" component={RSVP} />
    </>
  );
}

export default ContentPage;
