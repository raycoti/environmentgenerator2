import { connect } from 'react-redux';
import React, { Component } from 'react';
import Game from '../components/Game'

//use the on enter thing as well 
const mapStateToPrps = (state) => {
  return {
    level: state.level.currentLevel
  }
}

export default connect(mapStateToPrps)(Game)
