import React from 'react'
import PropTypes from 'prop-types'

export const ServiceDetails = (props) => (
  <div className='service-details'>
    <div
      className='close-icon'
      style={{backgroundColor: 'pink', width: '30px', height: '30px'}}
      onClick={
        () => {
          let newServices = [ ...props.services ]
          newServices[props.index].displayDetails = false
          props.setServices(newServices)
        }
      }
    >X</div>
    <h2>{props.name}</h2>
    <div className='description'>{props.description}</div>
    <a className='website' href={props.website}>{props.website}</a>
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