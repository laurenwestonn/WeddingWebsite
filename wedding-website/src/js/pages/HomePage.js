import React from "react";
import CoverPhoto from "../components/CoverPhoto";
import WeddingNavBar from "../WeddingNavBar";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <CoverPhoto isBig={true} />
        <WeddingNavBar />
      </div>
    </>
  );
}

export default HomePage;
