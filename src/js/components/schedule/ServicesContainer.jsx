import React, { useState } from 'react'
import { ServiceSelector } from './ServiceSelector'
import { ServiceDetails } from './ServiceDetails';

export const ServicesContainer = (props) => {

  const [services, setServices] =  useState(props.services)

  let shown = false

  return (
    <>
      {services.map((service,i) => {
        if(service.displayDetails) {
          shown = true
          return (
            <ServiceDetails
              key={i}
              name={service.name}
              index={i}
              services={services}
              setServices={setServices}
              images={service.images}
              description={service.description}
              websiteName={service.websiteName}
              websiteAddress={service.websiteAddress}
            />
          )
        }
        return null
      })}

      {
        shown || <ServiceSelector
          services={services}
          setServices={setServices}
        />
      }
    </>
  )
}