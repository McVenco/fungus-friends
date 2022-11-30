import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';

class Fungus extends React.Component {
  render () {
    return (
      <Marker
        position={[52.081182, 5.237143]}
        icon={new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })}
      >
        <Popup>
          Here lives the vibrant chandrasekhar
        </Popup>
      </Marker>
    )
  }
}

export default Fungus;