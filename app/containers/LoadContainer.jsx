import { connect } from 'react-redux';
import React, { Component } from 'react';
import Grid from '../components/Grid'
import { loadBlocks } from '../reducers/grid'
// this is after we get the id 
// so we need to dispatch to get the blocks
//
//maybe on mount 
const mapStateToProps = (state) => {
  return {
    level: state.level.currentLevel,
    blocks: state.grid.blocks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   }
}


class LoadContainer extends Component {
  constructor(){
    super()
  }


  render(){
  //have to like totally 
    const blocks = {
      selected: {},
      blocks: this.props.level.blocks,
      type: 'none',
      multi: false,
    }
    return (
      <Grid gridBlocks={this.props.level.blocks} blocks={blocks} />
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadContainer)