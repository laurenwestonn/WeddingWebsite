import React from 'react';
import RSVP from './pages/RSVP';
import Location from './pages/Location';
import Header from './Header';
import {Route} from 'react-router-dom';

function ContentPage() {
  return (
    <>
      <Header />
      <div className="content-page">
        <div className="content">
          <Route path="/p/rsvp" component={RSVP} />
          <Route path="/p/location" component={Location} />
        </div>
      </div>
    </>
  );
}

export default ContentPage;
