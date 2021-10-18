import React from 'react';

import './Header.styles.scss';

function Header() {
  return (
  <header>
    <h1 className="header-name">
      <a href="http://harshadajog.com">
        Harshada Jog
      </a>
    </h1>
    <div className="header-webdev">Software Engineer, Frontend</div>
  </header>)
}

export default Header;