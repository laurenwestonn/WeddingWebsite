import React from "react";
import Nav from "react-bootstrap/Nav";

function WeddingNavBar(props) {
  return (
    <div className="nav-wrapper">
      <Nav
        fill
        className="justify-content-center"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="li">
          <Nav.Link href="/home">OUR WEDDING</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">LOCATION</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">RSVP</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default WeddingNavBar;
