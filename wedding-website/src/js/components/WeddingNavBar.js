import React from "react";
import { Link } from "react-router-dom";

function WeddingNavBar(props) {
  return (
    <div className="nav-wrapper sticky">
      <div className="row no-gutters">
        <div className="col-md-6 offset-md-3">
          <ul>
            <li>
              <Link to="/">OUR WEDDING</Link>
            </li>
            <li>
              <Link to="/p/location">LOCATION </Link>
            </li>
            <li>
              <Link to="/p/rsvp">RSVP</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeddingNavBar;
