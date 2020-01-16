import React from 'react'
import { ServiceDetails } from '../components'
import { ServicesContainer } from '../components/schedule'

export const Schedule = () => {

  return (
    <div className='schedule'>
      <h1>Schedule</h1>
      <ServicesContainer />

      <ServiceDetails
        name={'Photographer'}
        images={['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']}
        description={'Our photography will be done by Maddie Farris. Here is her website'}

        website={'www.something.com'}
      />
    </div>
  )
}