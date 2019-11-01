import React from "react";
import { Location, RSVP } from "./index";
import Header from "../Header";
import { Route } from "react-router-dom";

function ContentPage() {
  return (
    <>
      <Header />
      <div className="content-page">
        <div className="content">
          <Route path="*/rsvp" component={RSVP} />
          <Route path="*/location" component={Location} />
        </div>
      </div>
    </>
  );
}

export default ContentPage;
