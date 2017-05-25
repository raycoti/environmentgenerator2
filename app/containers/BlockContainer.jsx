import { connect } from 'react-redux';
import React, { Component } from 'react';
import BlockSelect from '../components/BlockSelect'
import {changeType, selectBlock, selectType, toggleMulti, clearTable} from '../reducers/grid'

var newSwitch = false;

const mapStateToProps = (state) => {
  return {
    current: state.grid.selected,
    type: state.grid.selected.type,
    selectType: state.grid.type,
    selector: state.grid.multi,
  }
}
const mapDispatchToProps= (dispatch) => {
  return {
    chaChange(type){
      dispatch(changeType(type));
    },
    changeType(type){
      dispatch(selectType(type));
    },
    toggler(){
      dispatch(toggleMulti())
    },
    selectBlock(block){
      dispatch(selectBlock(block))
    },
    clear(){
      dispatch(clearTable())
    }
  }
}
//dispatch 


class BlockContainer extends Component {
  constructor(){
    super()
    this.change= this.change.bind(this)
    this.multiToggle= this.multiToggle.bind(this);
  }
  change(e){
  
    if (this.props.current.id){
      this.props.chaChange(e.target.value)
    }
    if (this.props.selector){
      
      this.props.changeType(e.target.value)
    }
    this.props.selectBlock({});
  }
  multiToggle(){
    newSwitch = !newSwitch;
   // this.setState({toggle: newSwitch})
    this.props.toggler();
    this.props.selectBlock({});
    this.props.changeType('none')
  }
  render(){
    //console.log(this.props.current)
    // the return below could be put into block select too maybe 
    return (
      <div className = "col-md-4">
        <h1>BLOCK Editor</h1>
        <div className="col-md-12">
        
            <BlockSelect toggle={this.multiToggle} handleChange={this.change} />
            {this.props.current.id && <div className="col-md-8">
            <h2>Current BLOCK: {this.props.current.id}</h2>
            <h3>Block TYPE: {this.props.current.type}</h3>
          </div>
        }
        </div>
        <button className="btn btn-warning" onClick={()=>this.props.clear()}>CLEAR GRID </button>
        
      </div>
    )
  }



}

export default connect(
  mapStateToProps, mapDispatchToProps)(BlockContainer)
