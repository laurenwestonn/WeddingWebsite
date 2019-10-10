import React from 'react';
import WeddingNavBar from './WeddingNavBar';
import CoverPhoto from './components/CoverPhoto';

function Header() {
  return (
    <div className="header">
      <WeddingNavBar />
      <CoverPhoto />
    </div>
  );
}

export default Header;
