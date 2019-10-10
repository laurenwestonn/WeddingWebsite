import React from 'react';
import CoverPhoto from '../components/CoverPhoto';
import WeddingNavBar from '../WeddingNavBar';

function HomePage() {
  return (
    <>
      <div className="homepage">
        <WeddingNavBar />
        <CoverPhoto isBig={true} />
      </div>
    </>
  );
}

export default HomePage;
