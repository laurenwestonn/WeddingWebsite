import React from "react";
import CoverPhoto from "./CoverPhoto";
import WeddingNavBar from "./WeddingNavBar";
import RobAndLauren from "../images/RobAndLauren.jpg";

function HomePage(props) {
  return (
    <>
      <CoverPhoto coverPhoto={RobAndLauren} />
      <WeddingNavBar />
    </>
  );
}

export default HomePage;
