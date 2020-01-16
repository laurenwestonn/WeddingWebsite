import React, { useState } from 'react'
import { ServiceSelector } from './ServiceSelector'

export const ServicesContainer = () => {

  const [services, setServices] =  useState(
    [
      {
        name: 'Photographer',
        icon: 'fas fa-camera',
        displayDetails: false
      },
      {
        name: 'Florirst',
        icon: 'fa-camera',
        displayDetails: false
      },
      {
        name: 'Decorator',
        icon: 'fas fa-chevron-right',
        displayDetails: false
      },
      {
        name: 'Videographer',
        icon: 'fa-camera',
        displayDetails: false
      },
      {
        name: 'Music',
        icon: 'fa-camera',
        displayDetails: false
      }
    ]
  )

  return (
    <ServiceSelector
      services={services}
      setServices={setServices}
    />
  )
}