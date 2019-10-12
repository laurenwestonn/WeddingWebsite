import React from "react";
import { CoverPhoto, WeddingNavBar } from "./components";

function Header() {
  return (
    <div className="header">
      <WeddingNavBar />
      <CoverPhoto />
    </div>
  );
}

export default Header;
