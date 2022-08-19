import React from 'react';
import './styles.css';

function Header() {
  return (
    <div className="calendar_month-wrapper">
      <a href className="icon-button is-small w-inline-block" tabIndex={0}>
        <div className="chevron is-left w-icon-dropdown-toggle" />
      </a>
      <div className="text-size-medium">April 2022</div>
      <a href className="icon-button is-small w-inline-block" tabIndex={0}>
        <div className="chevron is-right w-icon-dropdown-toggle" />
      </a>
    </div>
  );
}

export default Header;
