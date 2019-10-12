import React from "react";
import PropTypes from "prop-types";
import { PersonInfo } from "../components";

function AboutUs(props) {
  return (
    <div className="AboutUs">
      <div className="row">
        {props.people.map((person, index) => (
          <div className="col-12 col-sm">
            <PersonInfo key={index} person={person} />
          </div>
        ))}
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  people: PropTypes.array
};

export default AboutUs;
