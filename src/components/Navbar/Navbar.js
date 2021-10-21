import React from 'react';
import logo from '../../assets/logo_color1.png';
import { NavLink } from 'react-router-dom';

import './Navbar.styles.scss';

const Navbar =(props) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="menu">
        <li>
          <NavLink activeClassName="nav-active" to="/about/">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/resume/">Resume</NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/projects/">Projects</NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/contact/">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;