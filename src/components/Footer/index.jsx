import React from 'react';
import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.dropdownButtonWrapper}>
    <a href className={classes.buttonLinkIsSmall} tabIndex={0}>
      Cancel
    </a>
    <a href className={classes.buttonLinkIsSmallIsPrimary} tabIndex={0}>
      Apply
    </a>
  </div>
);

export default Footer;
