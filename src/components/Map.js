import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import Fungus from "./Fungus";

class Map extends React.Component {
  render () {
    const fungus = Object.keys(this.props.fungi).map(key => (
      <Fungus key={key} fungus={this.props.fungi[key]}/>
    ))

    return (
      <>
        <MapContainer center={[52.081, 5.236]} zoom={17} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {fungus}
        </MapContainer>
      </>
    )
  }
}

export default Map;