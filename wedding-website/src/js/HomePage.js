import React from "react";
import CoverPhoto from "./CoverPhoto";
import WeddingNavBar from "./WeddingNavBar";
import RobAndLauren from "../images/RobAndLauren.jpg";

function HomePage(props) {
  return (
    <>
      <div className="homepage">
        <CoverPhoto coverPhoto={RobAndLauren} />
        <WeddingNavBar />
      </div>
    </>
  );
}

export default HomePage;
