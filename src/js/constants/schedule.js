
const ceremonyServices = [
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

const mealServices =  [
  {
    name: 'Catering',
    icon: 'fas fa-camera',
    description: 'Our food will be made by Pink Pepper. Here is their website',
    website: 'www.website.com',
    images: ['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']
  },
  {
    name: 'Cake',
    icon: 'fa-camera',
    description: 'We will be having a naked chocolate cake made by Bun Voyage'
  }
]

const partyServices =  [
  {
    name: 'Band',
    icon: 'fas fa-camera',
    description: 'We\'ve hired the Stevie O\'Connor band',
    website: 'www.website.com',
    images: ['http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png']
  },
  {
    name: 'DJ',
    icon: 'fa-camera'
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