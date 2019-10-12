import React from "react";
import { CoverPhoto, AboutUs, WeddingNavBar } from "../components";
import RobAndLauren2 from "../../images/RobAndLauren2.jpg";
import RobAndLauren3 from "../../images/RobAndLauren3.jpg";

function HomePage() {
  var aboutUsPeople = [
    {
      name: "Robert Carter",
      image: RobAndLauren2
    },
    {
      name: "Lauren Weston",
      image: RobAndLauren3
    }
  ];

  return (
    <>
      <div className="homepage">
        <WeddingNavBar />
        <CoverPhoto isBig={true} />
        <AboutUs people={aboutUsPeople} />
      </div>
    </>
  );
}

export default HomePage;
