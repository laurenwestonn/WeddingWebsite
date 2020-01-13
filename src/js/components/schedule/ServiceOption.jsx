import React from 'react'
import PropTypes from 'prop-types'

export const ServiceOption = (props) => (
  <div className='serviceOption'>
    <span class="fas fa-camera"></span>
    <i class="fas fa-camera"></i>
    <span class="fas fa-chevron-right"></span>

    <div className='overlay'>
      <h2>{props.name}</h2>
    </div>
  </div>
)

ServiceOption.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
}