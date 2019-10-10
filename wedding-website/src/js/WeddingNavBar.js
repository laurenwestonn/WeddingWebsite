import React from 'react';
import {Link} from 'react-router-dom';

function WeddingNavBar(props) {
  return (
    <div className="nav-wrapper">
      <div className="row no-gutters">
        <div className="col-md-6 offset-md-3">
          <ul>
            <li>
              <Link to="/">
                <div className="navLink">OUR WEDDING</div>
              </Link>
            </li>
            <li>
              <Link to="/p/location">
                <div className="navLink">LOCATION</div>
              </Link>
            </li>
            <li>
              <Link to="/p/rsvp">
                <div className="navLink">RSVP</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeddingNavBar;
