import React from 'react';
import './styles.css';

function Footer() {
  return (
    <div className="dropdown_button-wrapper">
      <a href className="button-link is-small w-button" tabIndex={0}>
        Cancel
      </a>
      <a href className="button-link is-small is-primary w-button" tabIndex={0}>
        Apply
      </a>
    </div>
  );
}

export default Footer;
