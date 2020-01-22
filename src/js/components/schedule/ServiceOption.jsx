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
      <div className='icon-container'>
        {props.service.icon}
      </div>
      <div className='overlay'>
        <h3>{props.service.name}</h3>
      </div>
    </div>
  </div>
)

ServiceOption.propTypes = {
  index: PropTypes.number,
  services: PropTypes.array.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    displayDetails: PropTypes.bool
  }).isRequired,
  setServices: PropTypes.func
}