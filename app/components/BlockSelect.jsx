//this is a select  input stuff
import React, {Component} from 'react';
import { Link } from 'react-router';
//
const terainTypes = ['none', 'rock', 'grass', 'water', 'lava','goal','start','key','lock','enemy','moveable']
export default function(props) {
  const onCha = props.handleChange;
  return ( 
    <div className="col-md-4">
      <h3>Edit blocks</h3>
      <label className="switch">
      <input onChange={()=>{ props.toggle(); console.log('clicked')}} type="checkbox" />
      <div className="slider round"></div>
      </label>
    <h3>Terrain Type</h3>
    <select className="btn btn-default btn-select" onTouchEnd ={onCha} onClick={onCha}>
      {terainTypes.map((type) => {
        return (
          <option key={type} value={type}>{type.toUpperCase()}</option>
        )
      })}
    </select>
    </div>
  )
}
