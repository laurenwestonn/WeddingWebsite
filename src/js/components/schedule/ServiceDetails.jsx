import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const ServiceDetails = (props) => (
  <div className='service-details'>
    <div
      className='close-icon'
      onClick={
        () => {
          let newServices = [ ...props.services ]
          newServices[props.index].displayDetails = false
          props.setServices(newServices)
        }
      }
    >
      <span className="fas fa-chevron-left"/>
    </div>
    <h2>{props.name}</h2>
    <div className='description'>{props.description}</div>
    <a
      className='website'
      href={props.websiteAddress}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.websiteName}
      <FontAwesomeIcon size="xs" style={{marginLeft: 7}} icon={faExternalLinkAlt} />
    </a>
    <div className='images'>
      <div className="row">
        <div className='col'>
          <img src={props.images && props.images[0]} alt="serviceImage" />
        </div>
          <div className='col'>
          {props.images && props.images.length > 1 &&
            <img src={props.images[1]} alt="serviceImage" />
          }
          </div>
      </div>
    </div>
  </div>
)


ServiceDetails.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  description: PropTypes.string,
  websiteName: PropTypes.string,
  websiteAddress: PropTypes.string,
  index: PropTypes.number,
  services: PropTypes.array.isRequired,
  setServices: PropTypes.func
}