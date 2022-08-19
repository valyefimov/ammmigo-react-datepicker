import React from 'react';
import './styles.css';

function LastSevenDays() {
  return (
    <a href className="dropdown_item is-active w-inline-block" tabIndex={0}>
      <div>Last 7 days</div>
      <div className="icon-1x1-xxsmall is-active w-embed">
        <svg id="done_black_24dp" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
          <path id="Path_760" data-name="Path 760" d="M0,0H24V24H0Z" fill="none" />
          <path id="Path_761" data-name="Path 761" d="M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z" fill="#4747fc" />
        </svg>
      </div>
    </a>
  );
}

export default LastSevenDays;
