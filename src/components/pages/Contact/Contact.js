import React from 'react';
import './Contact.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contacts">
      {/* <h3 className="contacts-header">CONTACTS</h3> */}
      <ul className="contacts-list">
        <li>
          <a href="mailto:harshadajog@yahoo.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/harshada-jog-8137a02/">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </li> 
         <li>
          <a href="https://github.com/harshadajog/">
            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/tharshadajog">
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;