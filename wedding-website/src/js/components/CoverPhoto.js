import React from 'react';
import PropTypes from 'prop-types';
import RobAndLauren from '../../images/RobAndLauren.jpg';

function CoverPhoto(props) {
  return (
    <div
      className={'cover-photo-container' + (props.isBig ? ' big' : ' small')}
    >
      <div
        className="photo"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0, 0, 0.6), rgba(0, 0, 0, 0.2)),url(' +
            RobAndLauren +
            ')',
        }}
      ></div>
      <div className="content">
        <div className="title">Rob & Lauren</div>
        <div className="subtitle">Happily ever after</div>
      </div>
    </div>
  );
}

export default CoverPhoto;

CoverPhoto.propTypes = {
  isBig: PropTypes.bool,
};
