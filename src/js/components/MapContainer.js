import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

let lonLat = {lat: 53.355548, lng: -2.238814};

function MapContainer(props) {
  return (
    <div className="map-container" style={{ height: '400px' }}>
      <Map
        google={props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={lonLat}
      >
        <Marker title={"The I Do's"} name={'Styal'} position={lonLat} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA8QyEzfXMrUCErxfa_8w9HSG7T0jfcYPI',
})(MapContainer);
