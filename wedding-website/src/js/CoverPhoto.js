import React from "react";
import PropTypes from "prop-types";

function CoverPhoto(props) {
  return (
    <div className="row no-gutters">
      <div className="col-12">
        <div className="cover-photo-container">
          <div
            className="photo"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(" +
                props.coverPhoto +
                ")"
            }}
          ></div>
          <div className="overlay"></div>
          <div className="content">
            <div className="title">Rob & Lauren</div>
            <div className="subtitle">5th July 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPhoto;

CoverPhoto.propTypes = {
  coverPhoto: PropTypes.string.isRequired
};
