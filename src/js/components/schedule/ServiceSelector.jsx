import React from 'react'
import PropTypes from 'prop-types'
import { ServiceOption } from './ServiceOption'

export const ServiceSelector = (props) => {
  //const noOfServices = props.services.length
  //const noOfRows = Math.ceil(noOfServices / 3)
  //const noPerRow = noOfServices > 2 ? 3 : 2

  console.log(props.services)
  return (
    <div className='service-selector'>
      <div className='row no-gutters'>
      {
        props.services.map((service, i) => {
          if (i < 3) {
            return (
              <div className='col'>
                <ServiceOption
                  service={service}
                  setServices={props.setServices}
                />
              </div>
            )
          } else {
            return null
          }
        })
      }
      </div>
      <div className='row no-gutters'>
      {
        props.services.map((service, i) => {
          if (i >= 3 && i < 6) {
            return (
              <div className='col'>
                <ServiceOption
                  service={service}
                  setServices={props.setServices}
                />
              </div>
            )
          } else {
            return null
          }
        })
      }
      </div>
    </div>
  )
}

ServiceSelector.propTypes = {
  services: PropTypes.array.isRequired,
  setServices: PropTypes.func.isRequired
}