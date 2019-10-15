import React from "react";

function Countdown() {
  return (
    <div className="countdown">
      <div className="countdown-info">
        <div className="date">5th July 2020</div>
        <div className="location">
          <div className="address-1">Styal Lodge</div>
          <div className="address-2">Station Road, Styal</div>
          <div className="postcode">SK9 4JN</div>
        </div>
      </div>

      <div className="countdown-breakdown">
        <div className="box">
          <div className="value">213</div>
          <div className="measurement">days</div>
        </div>
        <div className="box">
          <div className="value">17</div>
          <div className="measurement">hours</div>
        </div>
        <div className="box">
          <div className="value">59</div>
          <div className="measurement">minutes</div>
        </div>
        <div className="box">
          <div className="value">21</div>
          <div className="measurement">seconds</div>
        </div>
      </div>
    </div>
  );
}
export default Countdown;
