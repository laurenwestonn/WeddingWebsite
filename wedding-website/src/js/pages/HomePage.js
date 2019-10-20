import React from 'react';
import {
  CoverPhoto,
  WeddingNavBar,
  AboutUs,
  Countdown,
  MapContainer,
} from '../components';
import RobAndLauren2 from '../../images/RobAndLauren2.jpg';
import RobAndLauren3 from '../../images/RobAndLauren3.jpg';

function HomePage() {
  var aboutUsPeople = [
    {
      name: 'Robert Carter',
      image: RobAndLauren2,
      bio:
        'Once upon a time, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce elementum elementum erat a blandit.',
    },
    {
      name: 'Lauren Weston',
      image: RobAndLauren3,
      bio:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce elementum elementum erat a blandit.',
    },
  ];

  return (
    <>
      <div className="homepage">
        <WeddingNavBar />
        <CoverPhoto isBig={true} />
        <AboutUs people={aboutUsPeople} />
        <Countdown countdownFrom={new Date(2020, 6, 5, 14, 0, 0)} />
        <MapContainer />
      </div>
    </>
  );
}

export default HomePage;
