import React, {Component} from 'react';
import { Link } from 'react-router';

export default function(props) {
 const isActive = props.id=== props.coor;
 var type = false;
 const size = Object.keys(props.blocks).length
 if (size){
   if (props.blocks[props.coor]){
     var theType = props.blocks[props.coor].type
     type = true;
   }
 }

  return (
    <th className={isActive ? `Active` : (type? theType:'none')} id={props.coor} key = {props.coor}>
    {/*<img className="img-thumbnail" src="/terrain/grass1.png" />*/}
      
    </th>
  )
}