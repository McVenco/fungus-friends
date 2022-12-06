import React from "react";
import { Color, Spots } from '../front-end-api.ts';

class Filter extends React.Component {
  
  render () {
    // filter Color/Spots enum from ts file to display only string values:
    // create helper to remove numbers
    const filterNumber = value => isNaN(Number(value)) === false;
    // turn enums into arrays
    function colorToArray(Color) {
      return Object.values(Color)
        .filter(filterNumber)
        .map(key => Color[key].toLowerCase())
    }
    function spotsToArray(Spots) {
      return Object.values(Spots)
        .filter(filterNumber)
        .map(key => Spots[key])
    }
    // some variables
    const color = colorToArray(Color);
    const spots = spotsToArray(Spots)
    // return string values to select options
    const colorValues = Object.values(color).map(
      col => <option value={col} key={col}>{col}</option>
    )
    const spotsValues = Object.values(spots).map(
      spot => <option value={spot} key={spot}>{spot}</option>
    )

    return (
      <>
        <h3>Filter fungi</h3>
        <select name="colorfilter" id="">
          <option default>- filter color -</option>
          {colorValues}
        </select>
        <select name="spotsfilter" id="">
          <option default>- filter spots -</option>
          {spotsValues}
        </select>
      </>
    )
  }
}

export default Filter;