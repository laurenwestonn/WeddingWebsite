import React from 'react'
import PropTypes from 'prop-types'

export const ServiceOption = (props) => (
  <div className='col'>
    <div
      className='service-option'
      onClick={() => {
        let newServices = [...props.services]
        newServices[props.index].displayDetails = true
        props.setServices(newServices)
      }}
    >
      <span className={props.service.icon}></span>
      <i className="fas fa-camera"></i>
      <span className="fas fa-chevron-right"></span>

      <div className='overlay'>
        <h2>{props.service.name}</h2>
      </div>
    </div>
  </div>
)

ServiceOption.propTypes = {
  index: PropTypes.number,
  services: PropTypes.array.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    displayDetails: PropTypes.bool
  }).isRequired,
  setServices: PropTypes.func
}