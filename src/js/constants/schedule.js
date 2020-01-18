import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faFilm, faLeaf, faLightbulb, faMusic, faRing } from '@fortawesome/free-solid-svg-icons';
import { faUtensils, faBirthdayCake, faGuitar, faHeadphones } from '@fortawesome/free-solid-svg-icons';

const ceremonyServices = [
  {
    name: 'Photographer',
    icon: <FontAwesomeIcon size="2x" icon={faCamera} />,
    description: 'Our photography will be done by Maddie Farris. Here is her website',
    website: 'www.website.com',
    images: ['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']
  },
  {
    name: 'Videographer',
    icon: <FontAwesomeIcon size="2x" icon={faFilm} />
  },
  {
    name: 'Florirst',
    icon: <FontAwesomeIcon size="2x" icon={faLeaf} />
  },
  {
    name: 'Decorator',
    icon: <FontAwesomeIcon size="2x" icon={faLightbulb} />
  },
  {
    name: 'Music',
    icon: <FontAwesomeIcon size="2x" icon={faMusic} />
  },
  {
    name: 'Rings',
    icon: <FontAwesomeIcon size="2x" icon={faRing} />
  }
]

const mealServices =  [
  {
    name: 'Catering',
    icon: <FontAwesomeIcon size="2x" icon={faUtensils} />,
    description: 'Our food will be made by Pink Pepper. Here is their website',
    website: 'www.website.com',
    images: ['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']
  },
  {
    name: 'Cake',
    icon: <FontAwesomeIcon size="2x" icon={faBirthdayCake} />,
    description: 'We will be having a naked chocolate cake made by Bun Voyage'
  }
]

const partyServices =  [
  {
    name: 'Band',
    icon: <FontAwesomeIcon size="2x" icon={faGuitar} />,
    description: 'We\'ve hired the Stevie O\'Connor band',
    website: 'www.website.com',
    images: ['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']
  },
  {
    name: 'DJ',
    icon: <FontAwesomeIcon size="2x" icon={faHeadphones} />
  }
]

export const schedule = [
  {
    time: '1pm',
    name: 'Arrivals'
  },
  {
    time: '2pm',
    name: 'Ceremony',
    services: ceremonyServices
  },
  {
    time: '2:30pm',
    name: 'Canapes / Photos'
  },
  {
    time: '3:30pm',
    name: 'Meal & Cake Cutting',
    services: mealServices
  },
  {
    time: '6pm',
    name: 'First Dance'
  },
  {
    time: '6:05pm',
    name: 'Party!',
    services: partyServices
  },
  {
    time: '8:00pm',
    name: 'Evening Snacks'
  },
  {
    time: '12:00am',
    name: 'Last Orders'
  },
]