import React from "react";
import { RSVP, Schedule } from "./index";
import Header from "../Header";
import { Route } from "react-router-dom";

function HalfWidthContentPage() {
  return (
    <>
      <Header />
      <div className="content-page">
        <div className="content">
          <Route path="*/rsvp" component={RSVP} />
          <Route path="*/schedule" component={Schedule} />
        </div>
      </div>
    </>
  );
}

export default HalfWidthContentPage;
