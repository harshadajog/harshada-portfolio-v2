import React from 'react';
import logo from '../../assets/logo_palette.png';
import './Header.styles.scss';

function Header() {
  return (
  <header>
    <h1 className="main-header">
      <img src={logo} alt="logo" height="32" />
      <a href="http://harshadajog.com">
        HARSHADA JOG
      </a>
    </h1>
    {/* <div className="sub-header">
      Software Engineer
    </div> */}
  </header>
  )
}

export default Header;