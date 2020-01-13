import React from 'react'
import PropTypes from 'prop-types'

export const ServiceOption = (props) => (
  <div className='col'>
    <div className='service-option'>
      <span class={props.icon}></span>
      <i class="fas fa-camera"></i>
      <span class="fas fa-chevron-right"></span>

      <div className='overlay'>
        <h2>{props.name}</h2>
      </div>
    </div>
  </div>
)

ServiceOption.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
}