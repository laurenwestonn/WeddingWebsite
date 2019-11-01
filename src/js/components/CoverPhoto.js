import React from "react";
import PropTypes from "prop-types";
import RobAndLauren from "../../images/theLovelyCouple/RobAndLauren.jpg";
import image_top from "../../images/borders/line_top.png";
import image_bottom from "../../images/borders/line_bottom.png";

function CoverPhoto(props) {
  return (
    <div
      className={"cover-photo-container" + (props.isBig ? " big" : " small")}
    >
      <div
        className="photo"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0, 0, 0.6), rgba(0, 0, 0, 0.2)),url(" +
            RobAndLauren +
            ")"
        }}
      ></div>
      <div className="content">
        <img className="image-top" src={image_top} alt="top-border" />
        <div className="title">Rob & Lauren</div>
        <div className="subtitle">Happily ever after</div>
        <img className="image-top" src={image_bottom} alt="bottom-border" />
      </div>
    </div>
  );
}

export default CoverPhoto;

CoverPhoto.propTypes = {
  isBig: PropTypes.bool
};
