import React from "react";
import PropTypes from "prop-types";
// import RobAndLauren2 from "../../images/RobAndLauren2.jpg";
// import RobAndLauren from "../../images/RobAndLauren.jpg";

function PersonInfo(props) {
  return (
    <div className="person-info">
      <div className="image-wrapper">
        <img className="person-image" src={props.person.image} alt="person" />
      </div>
      <div className="person-name">{props.person.name}</div>
      <div className="person-description">{props.person.bio}</div>
    </div>
  );
}

PersonInfo.propTypes = {
  person: PropTypes.object
};

export default PersonInfo;
