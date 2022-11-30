import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import Fungus from "./Fungus";

class Map extends React.Component {
  render () {
    return (
      <>
        <h2>Fungus Map</h2>
        <MapContainer center={[52.08, 5.235]} zoom={16} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Fungus />
        </MapContainer>
      </>
    )
  }
}

export default Map;