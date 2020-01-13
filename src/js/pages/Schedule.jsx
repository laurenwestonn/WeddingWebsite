import React from 'react'
import { ServiceOption, ServiceDetails } from '../components'

export const Schedule = () => {
  return <div>
    <h1>Schedule</h1>
    <ServiceOption
      name={'Photographer'}
      image={'http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png'}
    />
    <ServiceDetails
      name={'Photographer'}
      images={['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']}
      decription={'Our photography will be done by Maddie Farris here is her webiste'}
      website={'www.something.com'}
    />
  </div>
}