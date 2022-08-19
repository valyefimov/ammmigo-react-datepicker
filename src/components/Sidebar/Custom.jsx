import React from 'react';
import './styles.css';

function Custom() {
  return (
    <a href className="dropdown_item w-inline-block" tabIndex={0}>
      <div>Custom</div>
      <div className="dropdown_chevron is-right w-icon-dropdown-toggle" />
    </a>
  );
}

export default Custom;
