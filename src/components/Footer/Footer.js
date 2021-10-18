import React from 'react';

import './Footer.styles.scss';

function Footer() {
  return (
    <footer>
      <div className="copyright">
        © 2021 Harshada Jog
      </div>
      <ul className="footer-links">
        <li>
          <a href="https://www.linkedin.com/in/harshada-jog-8137a02/">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/harshadajog/">Github</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;