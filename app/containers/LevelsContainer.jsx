import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';
import {loadAll, loadLevel} from '../reducers/level';
const mapStateToProps = (state) => {
  return {
    levels: state.level.levels,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load(){
      dispatch(loadAll())
    }
  }
}

class LevelsContainer extends Component{
  componentDidMount(){

    this.props.load();
  }
  render(){

  return (
    <div>
      {this.props.levels.map((level)=>{
        return <div><Link to={ `/level/${level.id}`}> LEVEL: {level.name} </Link> <a href={`/api/scene/${level.id}`}  target="_blank">JSON</a>
        </div>
      })}
    </div>


  )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LevelsContainer);
