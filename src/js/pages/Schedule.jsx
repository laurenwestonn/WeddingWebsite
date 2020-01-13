import React, { useState } from 'react'
import { ServiceDetails } from '../components'
import { ServiceSelector } from '../components/schedule'

export const Schedule = () => {

  const [services, setServices] =  useState(
    [
      {
        name: 'Photographer',
        icon: 'fas fa-camera'
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
      }
    ]
  )

  return (
    <div className='schedule'>
      <h1>Schedule</h1>
        <ServiceSelector
          services={services}
          setServices={setServices}
        />
      <ServiceDetails
        name={'Photographer'}
        images={['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']}
        description={'Our photography will be done by Maddie Farris. Here is her website'}

        website={'www.something.com'}
      />
    </div>
  )
}