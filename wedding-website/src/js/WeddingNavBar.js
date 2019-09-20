import React from "react";
import Nav from "react-bootstrap/Nav";

function WeddingNavBar(props) {
  return (
    <div className="nav-wrapper">
      <Nav
        justify
        className="justify-content-center"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="li">
          <Nav.Link href="/p/ourwedding">OUR WEDDING</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/p/location" eventKey="link-1">
            LOCATION
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/p/rsvp" eventKey="link-2">
            RSVP
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default WeddingNavBar;
