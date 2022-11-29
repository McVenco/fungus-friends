import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

class Map extends React.Component {
  render () {
    return (
      <>
        <h2>Fungus Map</h2>
        <p>Here comes a map!</p>
        <MapContainer center={[52.08, 5.235]} zoom={16} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
        </MapContainer>
      </>
    )
  }
}

export default Map;