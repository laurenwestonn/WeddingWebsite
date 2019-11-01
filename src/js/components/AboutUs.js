import React from 'react';
import PropTypes from 'prop-types';
import {PersonInfo} from '../components';

function AboutUs(props) {
  return (
    <div className="about-us">
      <div className="row">
        {props.people.map((person, index) => {
          if (index % 2 === 0) {
            return (
              <>
                <div
                  key={index}
                  className="col-12 col-sm-5 offset-md-2 col-md-3 offset-xl-2 col-xl-3"
                >
                  <PersonInfo person={person} />
                </div>
                <div className="col-12 col-sm-2 col-xxl-2">
                  <div className="people-connector">&</div>
                </div>
              </>
            );
          } else {
            return (
              <div key={index} className="col-12 col-sm-5 col-md-3 col-xxl-3">
                <PersonInfo person={person} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  people: PropTypes.array,
};

export default AboutUs;
