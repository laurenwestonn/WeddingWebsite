import React, { useState } from 'react'
import { ServiceSelector } from './ServiceSelector'
import { ServiceDetails } from './ServiceDetails';

export const ServicesContainer = () => {

  const [services, setServices] =  useState(
    [
      {
        name: 'Photographer',
        icon: 'fas fa-camera',
        description: 'Our photography will be done by Maddie Farris. Here is her website',
        website: 'www.website.com',
        images: ['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']
      },
      {
        name: 'Florirst',
        icon: 'fa-camera'
      },
      {
        name: 'Decorator',
        icon: 'fas fa-chevron-right'
      },
      {
        name: 'Videographer',
        icon: 'fa-camera'
      },
      {
        name: 'Music',
        icon: 'fa-camera'
      },
      {
        name: 'Rings',
        icon: 'fa-ring'
      }
    ]
  )

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
              images={service.images && service.images}
              description={service.description && service.description}
              website={service.website && service.website}
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