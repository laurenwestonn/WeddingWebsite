import React from "react";
import {
  CoverPhoto,
  WeddingNavBar,
  AboutUs,
  FlowerBorder,
  Countdown,
  MapContainer,
  Timeline
} from "../components";
import Rob from "../../images/theLovelyCouple/Dot/BeerCheckedShirt.jpg";
import Lauren from "../../images/theLovelyCouple/Pot/MissToMrs.jpg";

function HomePage() {
  var aboutUsPeople = [
    {
      name: "Robert Carter",
      image: Rob,
      bio:
        "Enjoying cartoons just as much as a scotch with Sinatra, Rob is a lovely mix of big kid and oldie. He's always willing to get stuck into anything - especially if it involves Marvel or DC."
    },
    {
      name: "Lauren Weston",
      image: Lauren,
      bio:
        "Equally creative as she is technical, Lauren grew up loving art and drama but ended up with a degree in Computer Science. Loves dancing and any excuse to play music. First to a buffet and last to leave a party"
    }
  ];

  return (
    <>
      <div className="homepage">
        <WeddingNavBar />
        <CoverPhoto isBig={true} />
        <AboutUs people={aboutUsPeople} />
        <FlowerBorder />
        <Countdown countdownFrom={new Date(2020, 6, 5, 14, 0, 0)} />
        <MapContainer />
        <Timeline />
      </div>
    </>
  );
}

export default HomePage;
