//TODO: 
import { connect } from 'react-redux';
import React, { Component } from 'react';
import LevelContainer from './LevelContainer';
class FooterContainer extends Component {
  constructor(){
    super()
  }

  render(){
    const thePath = this.props.path;
    return(
      thePath === '/grid' ? (<LevelContainer />) : <div></div>
    )
  }
}

export default FooterContainer;