import React from "react";
import RSVPForm from "../components/RSVPForm";

function RSVP() {
  return (
    <div className="rsvp">
      <h1 className="title">Will you attend?</h1>
      <p className="sub-title">Please reserve your place by March.</p>
      <RSVPForm />
    </div>
  );
}

export default RSVP;
