import React from 'react'
import PropTypes from 'prop-types'

export const ServiceOption = (props) => (
  <div className='col'>
    <div className='service-option' onClick={() => console.log(`Service ${props.name} clicked bruv`)}>
      <span class={props.service.icon}></span>
      <i class="fas fa-camera"></i>
      <span class="fas fa-chevron-right"></span>

      <div className='overlay'>
        <h2>{props.service.name}</h2>
      </div>
    </div>
  </div>
)

ServiceOption.propTypes = {
  service: PropTypes.objectOf({
    name: PropTypes.string,
    icon: PropTypes.string
  }).isRequired,
  setServices: PropTypes.func
}