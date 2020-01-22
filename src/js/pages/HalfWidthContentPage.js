import React from "react";
import { RSVP, Schedule } from "./index";
import Header from "../Header";
import { Route } from "react-router-dom";
import { Gifts } from "./Gifts";

function HalfWidthContentPage() {
  return (
    <>
      <Header />
      <div className="half">
        <div className="content">
          <Route path="*/rsvp" component={RSVP} />
          <Route path="*/schedule" component={Schedule} />
          <Route path="*/gifts" component={Gifts} />
        </div>
      </div>
    </>
  );
}

export default HalfWidthContentPage;
