import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';

class Fungus extends React.Component {
  render () {
    return (
      <Marker
        position={this.props.fungus.latlng}
        icon={new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })}
      >
        <Popup>
          <p>Here lives the {this.props.fungus.name}</p>
        </Popup>
      </Marker>
    )
  }
}

export default Fungus;