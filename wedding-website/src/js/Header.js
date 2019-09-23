import React from "react";
import WeddingNavBar from "./WeddingNavBar";
import CoverPhoto from "./components/CoverPhoto";

function Header() {
  return (
    <div className="header">
      <CoverPhoto />
      <WeddingNavBar />
    </div>
  );
}

export default Header;
