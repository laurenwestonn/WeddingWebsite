import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faFilm, faLeaf, faLightbulb, faMusic, faRing } from '@fortawesome/free-solid-svg-icons';
import { faUtensils, faBirthdayCake, faGuitar, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import pinkPepperLogo from "../../images/services/pink-pepper-logo.png"

const ceremonyServices = [
  {
    name: 'Photographer',
    icon: <FontAwesomeIcon size="2x" icon={faCamera} />,
    description: 'Our photography will be done by Maddie Farris. Here is her website',
    websiteName: 'maddiefarrisphotography.co.uk',
    websiteAddress: 'https://www.maddiefarrisphotography.co.uk/',
    images: [
      'https://images.squarespace-cdn.com/content/v1/594aadccb8a79bb4a3e931a0/1557427605902-T2UC6Q1CFQONPO287PJX/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/BEEHIVE++%2821%29.jpg?format=2500w',
      'https://images.squarespace-cdn.com/content/v1/594aadccb8a79bb4a3e931a0/1562610243449-ARUHJ30JF7QCASA3NGTB/ke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ/OAK+TREE+OF+PEOVER+%2821%29.jpg?format=2500w'
    ]
  },
  {
    name: 'Videographer',
    icon: <FontAwesomeIcon size="2x" icon={faFilm} />,
    description: 'Jo Gendle will be capturing our whole day and will make us a short feature film and a highlights video.',
    websiteName: 'jogendlefilms.com',
    websiteAddress: 'https://www.jogendlefilms.com',
    images: ['https://www.jogendlefilms.com/wp-content/uploads/2019/02/Jo-Gendle-Films-400x300.jpg',
     'https://www.jogendlefilms.com/wp-content/uploads/2018/11/38208527_1094960060660908_232125583436283904_o-800x600.jpg']
  },
  {
    name: 'Florirst',
    icon: <FontAwesomeIcon size="2x" icon={faLeaf} />,
    description: 'The flowers for the grooms and bridal party will be made by Jill Naughton',
    websiteName: '@jillnflowers',
    websiteAddress: 'https://www.instagram.com/jillnflowers/?hl=en',
    images: [
      'https://instagram.flhr4-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/71515926_960699397644936_3397903760083940192_n.jpg?_nc_ht=instagram.flhr4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=yzy72tIysTEAX88pgDO&oh=4b8d40dbfc1fbef3d426d4353d0540d8&oe=5ECAC07C',
      'https://instagram.flhr4-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/70049155_159367911813850_4268496169813677212_n.jpg?_nc_ht=instagram.flhr4-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vFFNeS6B4g8AX9hEcDl&oh=869215277af6dde78f80635427635500&oe=5EB9D847'
    ]
  },
  {
    name: 'Decorator',
    icon: <FontAwesomeIcon size="2x" icon={faLightbulb} />,
    description: 'Emma from Planning My Special Day will be decorating the venue with many lights and rustic touches',
    websiteName: 'facebook.com/SpecialDaysWeddingVenueDressing',
    websiteAddress: 'https://www.facebook.com/Special-Days-Wedding-Venue-Dressing-164721670280381/',
    images: [
      'https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/70512597_2440411486044710_386991139078537216_n.jpg?_nc_cat=100&_nc_oc=AQk6NjGoo2IxTtH3ydQY7dIBQ_hYQ-uD4RicAbEoCH77xAyXd-6XaASkQmDNQ2ksO0Q&_nc_ht=scontent.flhr4-2.fna&oh=50fc7f0127ba7c925e0f2e7aac356bba&oe=5ECAC57F',
      'https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/69555715_2440411506044708_3468666165784477696_n.jpg?_nc_cat=100&_nc_oc=AQkcJIw7Oor8tewFfOn7Sz9cnE2b4JRjznF-BW88jni6a9JCnHnRNPvsR0cAGIPysGo&_nc_ht=scontent.flhr4-2.fna&oh=0058c8df3a59fbd9faa54dada75f959f&oe=5E96B053',
    ]
  },
  {
    name: 'Music',
    icon: <FontAwesomeIcon size="2x" icon={faMusic} />,
    description: 'We will be having Rob\'s college friend Sarah Wragg playing Disney songs on harp during the ceremony.',
    websiteName: 'sarahdaviesharpist.com',
    websiteAddress: 'https://www.sarahdaviesharpist.com/',
    images: [
      'https://instagram.flhr4-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/67783987_124383742176885_3036156686966395248_n.jpg?_nc_ht=instagram.flhr4-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=L5k_KPmK0ugAX-t6Z2Z&oh=7d953f5baa2c05a561cea827c635f9e9&oe=5EC2522D',
    'https://instagram.flhr4-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/69407341_107655523830744_2526176551665332425_n.jpg?_nc_ht=instagram.flhr4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KLdAH1LlNlMAX9XnBY8&oh=b45532caf45dabad89e39ae38432828e&oe=5EB9B3CD'
   ]
  },
  {
    name: 'Rings',
    icon: <FontAwesomeIcon size="2x" icon={faRing} />,
    description: 'Our wedding rings will be hand made by Harveys. They\'ll match the ones we\'ve chosen from the designs drawn by Harvey.',
    websiteName: 'harveysthejewellers.co.uk',
    websiteAddress: 'http://harveysthejewellers.co.uk/',
    images: [
      'http://harveysthejewellers.co.uk/communities/9/004/013/566/529//images/4632638894_266x96.png',
    'http://harveysthejewellers.co.uk/communities/9/004/013/566/529//images/4632812873_977x626.jpg']
  }
]

const mealServices =  [
  {
    name: 'Catering',
    icon: <FontAwesomeIcon size="2x" icon={faUtensils} />,
    description: 'Our food will be made by Pink Pepper. Here is their website',
    websiteName: 'pinkpeppercatering.co.uk',
    websiteAddress: 'https://pinkpeppercatering.co.uk/',
    images: [
      pinkPepperLogo,
      'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/51783563_2358235047542546_1656335330040610816_o.jpg?_nc_cat=105&_nc_oc=AQknVZH04HC7sEp-hVboTANp1cLOl6SIu1IPzgzgeP-hEBk1gOspjqR1Ws2Pum5d9L0&_nc_ht=scontent.flhr4-1.fna&oh=e030abe14ce543faccb72edcad009cee&oe=5ED09EE8'
    ]
  },
  {
    name: 'Cake',
    icon: <FontAwesomeIcon size="2x" icon={faBirthdayCake} />,
    description: 'We will be having a naked chocolate cake made by Bun Voyage',
    websiteName: 'facebook.com/pg/handsoffmybuns',
    websiteAddress: 'https://www.facebook.com/pg/handsoffmybuns/posts/',
    images: [
      'https://d25hqtnqp5nl24.cloudfront.net/images/products/11/LN_701689_BP_11.jpg',
      'https://apracticalwedding.com/wp-content/uploads/2016/07/GOWI-0108-780x1170.jpg'
    ]
  }
]

const partyServices =  [
  {
    name: 'Band',
    icon: <FontAwesomeIcon size="2x" icon={faGuitar} />,
    description: 'At night you\'ll be rocking out to the UK\'s Country Entertainer of the Year Stevie O\'Connor and his 7 piece country rock band.',
    websiteName: 'stevieoconnor.com',
    websiteAddress: 'https://www.stevieoconnor.com/',
    images: [
      'https://static.wixstatic.com/media/4e5598_64a451b40c6e4bdf86e165b65b03a1c3~mv2.jpg/v1/fill/w_1688,h_1124,al_c,q_85/4e5598_64a451b40c6e4bdf86e165b65b03a1c3~mv2.webp',
      'https://www.wirralglobe.co.uk/resources/images/10701985.jpg?display=1&htype=0&type=responsive-gallery'
    ]
  },
  {
    name: 'DJ',
    icon: <FontAwesomeIcon size="2x" icon={faHeadphones} />,
    description: 'Disco Cheshire will be playing tunes all night long',
    websiteName: 'facebook.com/discocheshire',
    websiteAddress: 'https://www.facebook.com/discocheshire/',
    images: [
      'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/56161797_1203346963173062_4165257552788979712_n.png?_nc_cat=104&_nc_oc=AQmIRtJjSQNvdYsl6Ims-jDq3oBSuRdRIVqEbpq8l_hlLG6AyEVkuL0jZCDDC8YoBus&_nc_ht=scontent.flhr4-1.fna&oh=abc2173d1b941a43b702418d3a9888df&oe=5E98A9D4',
      'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/64325768_1253317561509335_1978341595296038912_o.jpg?_nc_cat=107&_nc_oc=AQlSuUtxVPkFWRAJKD10hD0PGfftYOpBbBmkIF8dCQJZAedEXHNt5sUcFMD58IFCY0E&_nc_ht=scontent.flhr4-1.fna&oh=7754579274bb9e64b010c2e3f3378816&oe=5E933A17'
    ]
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