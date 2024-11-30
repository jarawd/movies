import React from 'react';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

export default function Contact() {
  return (
    <div className="contact">
      <p className="contact__copyright">&copy; 2024 | Orlando Jara.</p>
      <div className="contact__social">
        <a
          href="https://github.com/jarawd"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github}
            alt="github icon"
            className="footer__social"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/orlando-jara-976288271/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin icon"
            className="footer__social"
          />
        </a>
      </div>
    </div>
  );
}
