import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import { Color, Spots } from '../front-end-api.ts';

class Fungus extends React.Component {
  render () {
    // replace number value of color and spots to their actual string value
    const color = Color[this.props.fungus.color];
    const spots = Spots[this.props.fungus.spots];
    
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
          <div className="fungus-popup">
            <p className="fungus-name"><span>{this.props.fungus.name}</span> lives here!</p>
            <p className="fungus-color">Color: <span>{color.toLowerCase()}</span></p>
            <p className="fungus-spots">Spots: <span>{spots}</span></p>
          </div>
        </Popup>
      </Marker>
    )
  }
}

export default Fungus;