import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {loadAll, loadLevel} from '../reducers/level';
import Navbar from '../components/navbar'
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
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.load();
  }
  render(){
    
  return (
    <div className="container-fluid">
    <Navbar />
    <h1>Levels</h1>
      {this.props.levels.map((level)=>{
        return <div className="col-md-12 levels"><Link to={ `/level/${level.id}`}> <h4> LEVEL: {level.name} </h4> </Link> <a href={`/api/scene/${level.id}`} target="_blank">JSON</a>
        </div>
      })}
    </div>


  )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LevelsContainer);
