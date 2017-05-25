import { NavLink } from 'react-router-dom';
import React, {Component} from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-fixed-top,">
      <ul className="thelist" >
        <section><h4><NavLink exact to="/" >Grid</NavLink></h4></section>
        <section><h4><NavLink to="/levels" activeClassName="active">Levels</NavLink></h4></section>
        <section><h4><a href="https://github.com/raycoti/environmentgenerator2" >Github</a></h4></section>
      </ul>
      Created by Ray Coti
    </nav>
  )
}

export default Navbar;
