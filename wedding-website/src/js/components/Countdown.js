import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Countdown(props) {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let msToHours = 1000 * 3600;

      let msBetween = props.countdownFrom - new Date();

      setDays(Math.floor(msBetween / (msToHours * 24)));
      let daysRemainder = msBetween % (msToHours * 24);

      setHours(Math.floor(daysRemainder / msToHours));
      let hoursRemainder = daysRemainder % msToHours;

      setMinutes(Math.floor(hoursRemainder / (1000 * 60)));
      let minutesRemainder = hoursRemainder % (1000 * 60);

      setSeconds(Math.floor(minutesRemainder / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [props.countdownFrom]);

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
        <div className="row no-gutters">
          <div className="col-6 col-sm-3">
            <div className="box ml-auto mr-2 my-2 mx-sm-2">
              <div className="value">{days}</div>
              <div className="measurement">days</div>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="box ml-2 mr-auto my-2 mx-sm-2">
              <div className="value">{hours}</div>
              <div className="measurement">hours</div>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="box ml-auto mr-2 my-2 mx-sm-2">
              <div className="value">{minutes}</div>
              <div className="measurement">minutes</div>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="box ml-2 mr-auto my-2 mx-sm-2">
              <div className="value">{seconds}</div>
              <div className="measurement">seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Countdown;

Countdown.propTypes = {
  countdownFrom: PropTypes.instanceOf(Date)
};
