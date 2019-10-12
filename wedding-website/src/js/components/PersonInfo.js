import React from "react";
import PropTypes from "prop-types";

function PersonInfo(props) {
  return (
    <div className="person-info">
      <img className="person-image" src={props.image} alt="person" />
      <div className="person-name">{props.name}}</div>
      <div className="person-description">Here's a lil bio</div>
    </div>
  );
}

PersonInfo.propTypes = {
  person: PropTypes.object
};

export default PersonInfo;
