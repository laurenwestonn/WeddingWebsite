import React from "react";
import PropTypes from "prop-types";

function PersonInfo(props) {
  return (
    <div className="person-info">
      <div className="image-wrapper">
        <img className="person-image" src={props.person.image} alt="person" />
      </div>
      <h4 className="person-name">{props.person.name}</h4>
      <div className="person-description">{props.person.bio}</div>
    </div>
  );
}

PersonInfo.propTypes = {
  person: PropTypes.object
};

export default PersonInfo;
