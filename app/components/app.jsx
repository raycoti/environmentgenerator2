import React, {Component} from 'react';
import FooterContainer from '../containers/FooterContainer';
import BlockContainer from '../containers/BlockContainer';
import SidebarContainer from '../containers/SidebarContainer'
import {connect} from 'react-redux'
import {selectBlock} from '../reducers/grid'
import Navbar from './navbar'
const mapDispatchToProps = (dispatch) => {
 return  {
   select(clickable){
    if (clickable){
    dispatch(selectBlock({}))
    }
  }
}
}
const app = function ({select,children, location}) {

  const thePath = location.pathname;
  const clickClear = thePath === '/';
  return (
    <div onClick ={() => select(clickClear)}>
          { children }
    </div>
  );
}


export default connect(null,mapDispatchToProps)(app)