import React from "react";
import { Link } from "react-router-dom";

function WeddingNavBar(props) {
  return (
    <div className="nav-wrapper">
      <ul class="justify-content-center">
        <li>
          <Link to="/">OUR WEDDING</Link>
        </li>
        <li>
          <Link to="/p/location">LOCATION</Link>
        </li>
        <li>
          <Link to="/p/rsvp">RSVP</Link>
        </li>
      </ul>
    </div>
  );
}

export default WeddingNavBar;
