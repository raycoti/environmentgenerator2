import React, {Component} from 'react';
import BlockContainer from './BlockContainer';
import LevelSelectContainer from './LevelSelectContainer'
export default function (props) {

  return (
    props.path === '/' ? (<BlockContainer />) :
      (<LevelSelectContainer />)
    )
}
