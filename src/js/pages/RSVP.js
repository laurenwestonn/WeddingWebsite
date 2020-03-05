import React from "react";
import RSVPForm from "../components/RSVPForm";

export function RSVP() {
  return (
    <div className="rsvp">
      <h1 className="title">Will you attend?</h1>
      <p className="sub-title">Please fill this form out for each person in your family that will be attending.<br></br><br></br>Reservations must be completed by March.</p>
      <div className='separator' />
      <RSVPForm />
    </div>
  );
}
