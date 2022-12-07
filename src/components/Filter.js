import React from "react";
import { Color, Spots } from '../front-end-api.ts';

class Filter extends React.Component {
  
  setColorFilter = (event) => {
    const colorFilter = {
      ...this.props.colorFilter,
      [event.target.name]: event.target.value
    }
    if(event.target.value !== "default"){
      this.props.updateColorFilter(this.props.colorFilter, colorFilter);
    } else {
      this.props.updateColorFilter(this.props.colorFilter, {});
    }
  }
  
  setSpotsFilter = (event) => {
    const spotsFilter = {
      ...this.props.spotsFilter,
      [event.target.name]: event.target.value
    }
    if(event.target.value !== "default"){
      this.props.updateSpotsFilter(this.props.spotsFilter, spotsFilter);
    } else {
      this.props.updateSpotsFilter(this.props.spotsFilter, {});
    }
  }

  removeColorFilter = () => {
    const colorSelect = document.querySelector('select[name=colorfilter')
    colorSelect.selectedIndex = 0;
    this.props.updateColorFilter(this.props.colorFilter, {});
  }

  removeSpotsFilter = () => {
    const spotsSelect = document.querySelector('select[name=spotsfilter')
    spotsSelect.selectedIndex = 0;
    this.props.updateSpotsFilter(this.props.spotsFilter, {});
  }

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
    const spots = spotsToArray(Spots);

    // return string values to select options
    const colorValues = Object.values(color).map(
      col => <option name="color" value={col} key={col}>{col}</option>
    )
    const spotsValues = Object.values(spots).map(
      spot => <option name="spots" value={spot} key={spot}>{spot}</option>
    )

    return (
      <>
        <h3>Filter fungi</h3>

        <div className="filter-select">
          <select
            name="colorfilter"
            onChange={this.setColorFilter}
            >
            <option value="default">- filter color -</option>
            {colorValues}
          </select>
          <button className="clearfilter" onClick={this.removeColorFilter}>&times;</button>
        </div>

        <div className="filter-select">
          <select
          name="spotsfilter"
          onChange={this.setSpotsFilter}
          >
            <option value="default">- filter spots -</option>
            {spotsValues}
          </select>
          <button className="clearfilter" onClick={this.removeSpotsFilter}>&times;</button>
        </div>
      </>
    )
  }
}

export default Filter;