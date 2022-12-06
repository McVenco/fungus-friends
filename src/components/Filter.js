import React from "react";
import { Color, Spots } from '../front-end-api.ts';

class Filter extends React.Component {
  
  render () {

    return (
      <>
        <h3>Filter fungi</h3>
        <select name="colorfilter" id="">
          <option default>- filter color -</option>
          {/* loop hier over de kleuren in Color */}
          {Object.keys(Color).map(key => (
            <option value={Color[key]}>{Color[key]}</option>
          ))}
        </select>
        <select name="spotsfilter" id="">
          <option default>- filter spots -</option>
          {Object.keys(Spots).map(key => (
            <option value={Spots[key]}>{Spots[key]}</option>
          ))}
        </select>
      </>
    )
  }
}

export default Filter;