import React from 'react'
import PropTypes from 'prop-types'

export const ServiceDetails = (props) => (
  <div className='service-details'>
    <h2>{props.name}</h2>
    <div className='description'>{props.description}</div>
    <a className='website' href={props.website}>website.com</a>
    <div className='images'>
      <div className="row no-gutters">
        <div className='col'>
          <img src={props.images && props.images[0]} alt="serviceImage" />
        </div>
        <div className='col'>
          <img src={props.images && props.images[0]} alt="serviceImage" />
        </div>
        <div className='col'>
          <img src={props.images && props.images[0]} alt="serviceImage" />
        </div>
      </div>
    </div>
  </div>
)


ServiceDetails.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  description: PropTypes.string,
  website: PropTypes.string,
  index: PropTypes.number,
  services: PropTypes.array.isRequired,
  setServices: PropTypes.func
}