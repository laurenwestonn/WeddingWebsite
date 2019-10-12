import React from "react";
import PropTypes from "prop-types";
import { PersonInfo } from "../components";

function AboutUs(props) {
  return (
    <div className="about-us">
      <div className="row">
        {props.people.map((person, index) => {
          if (index % 2 === 0) {
            return (
              <>
                <div className="col-12 col-sm-5 offset-md-2 col-md-3 offset-xl-3 col-xl-2">
                  <PersonInfo key={index} person={person} />
                </div>
                <div className="col-12 col-sm-2">
                  <div className="people-connector">&</div>
                </div>
              </>
            );
          } else {
            return (
              <div className="col-12 col-sm-5 col-md-3 col-xl-2">
                <PersonInfo key={index} person={person} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  people: PropTypes.array
};

export default AboutUs;
