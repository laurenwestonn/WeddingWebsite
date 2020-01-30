import React from "react";
import RSVPForm from "../components/RSVPForm";

export function RSVP() {
  return (
    <div className="rsvp">
      <h1 className="title">Will you attend?</h1>
      <p className="sub-title">Please reserve your place by March.</p>
      <div className='separator' />
      <RSVPForm />
    </div>
  );
}
