import React from "react";
import { Link } from "react-router-dom";

function WeddingNavBar() {
  return (
    <div className="nav-wrapper sticky">
      <div className="row no-gutters">
        <div className="col-md-6 offset-md-3">
          <ul>
            <li>
              <Link to="/">OUR WEDDING</Link>
            </li>
            <li>
              <Link to="/full/location">LOCATION </Link>
            </li>
            <li>
              <Link to="/half/rsvp">RSVP</Link>
            </li>
            <li>
              <Link to="/half/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/half/gifts">Gifts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeddingNavBar;
