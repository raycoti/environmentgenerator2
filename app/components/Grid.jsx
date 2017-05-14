import React, { Component } from 'react';
import Block from './block'
const rows = [];


const blockObj = function(blockArr){
  return blockArr.reduce((acc,cur)=>{
    acc[cur.id]={type: cur.type};
    return acc;
  },{}
  )
}

const Grid = (props) => {
  const theBlocks = blockObj(props.gridBlocks);
  const thegrid = makeGrid(props.blocks.width, props.id, theBlocks)
  return (
    <table width="100%" height="100%"  onClick={props.selectB}>
      <tbody>
        {thegrid}
    </tbody>
  </table>
  )
}
export default Grid;




const makeGrid = function(h, id, t) {
 const grid = getLength(h);
 //console.log(grid)
 const newGrid=grid.map((row,i)=>{
      return (
        <tr key={i}>
        {grid.map((colomn,j)=>{
        return(
          <Block blocks={t} id ={id} coor = {`${i},${j}`} key={`${i},${j}`}/>
          )})}
        </tr>
        )})
  return newGrid;
}
// maybe have a link at each block for the active thing
//this would requrie a new route
//
//
const getLength = (height)=>{
  const grid = []
   for(var i=0; i< height; i++){
      grid.push([])
    }
    return grid
}