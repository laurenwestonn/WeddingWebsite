import React from 'react'
import { ServiceOption, ServiceDetails } from '../components'

export const Schedule = () => {
  return <div>
    <h1>Schedule</h1>
    <div className='row no-gutters'>
      <ServiceOption
        name={'Photographer'}
        icon={'fas fa-camera'}
      />
      <ServiceOption
        name={'Florist'}
        icon={'fas fa-camera'}
      />
      <ServiceOption
        name={'Music'}
        icon={'fas fa-chevron-right'}
      />
    </div>
    <ServiceDetails
      name={'Photographer'}
      images={['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']}
      description={'Our photography will be done by Maddie Farris. Here is her website'}

      website={'www.something.com'}
    />
  </div>
}