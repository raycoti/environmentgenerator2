import React, {Component} from 'react';
import { connect } from 'react-redux'

import Level from '../components/level';
import {clearTable} from '../reducers/grid'
import {submitLevel} from '../reducers/level'
const removeNone = (blockArr) => {
  const goodStuff = blockArr.filter((block) => {
    return block.type !== 'none' && block.type !== null
  })
  return goodStuff;
}

const getBlocksWith = (type, blockArr)=> {
  const blocks = blockArr.filter((block) => {
    return block.type === type;
  });
  return blocks;
}

const mapStateToProps = (state) => {
  return {
    blocks: state.grid.blocks,
    selected: state.grid.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitTheLevel(name, blocks){
      dispatch(submitLevel(name, blocks))
      dispatch(clearTable())
     
    }
  }
}

class LevelContainer extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const Value = e.target.value;
    this.setState({inputValue: Value,
    dirty: true});
  }
  handleSubmit(e){
    e.preventDefault();
    //console.log(this.state.inputValue)
    const theBlocks = removeNone(this.props.blocks);
    //console.log(theBlocks)
    this.props.submitTheLevel(this.state.inputValue,theBlocks)
    this.setState({
      inputValue: '',
      dirty: false,
    })
   
    //if (theBlocks.length){
      //console.log('you got stuff');
    //}

  }
  render(){
    const blocks = this.props.blocks;
    const notEmpty = removeNone(blocks).length !==0;
    //console.log(notEmpty)
    const numKeys = getBlocksWith('key',blocks).length;
    const numGoals = getBlocksWith('goal', blocks).length;
    const numLocks = getBlocksWith('lock', blocks).length;
    const numStart = getBlocksWith('start', blocks).length;
    //console.log('keys equal locks?', numKeys === numLocks )
    let warning = ''
    const keyLocks = numKeys === numLocks;
    const goalAndStart = numStart === 1 && numGoals === 1;
    if(this.state.dirty && blocks.length){
      if (!keyLocks) {
        warning = 'Number of Keys Must Equal number of Locks'
      } 
      else if(!goalAndStart){
        warning = 'must have start and goal, only one of each'
      }
    }
    return (
      <Level warning={warning} handleChange={this.handleChange} inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} warning2={goalAndStart}/>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LevelContainer)