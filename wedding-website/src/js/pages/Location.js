import React from "react";
import { FlowerBorder, Countdown } from "../components";

function Location() {
  return (
    <>
      <FlowerBorder />
      <Countdown />
      <div className="location">
        <h1 className="title">Location</h1>
        <p>
          Our venue is
          <a href="https://www.styallodge.co.uk/"> Styal Lodge</a>
        </p>
      </div>
    </>
  );
}

export default Location;
