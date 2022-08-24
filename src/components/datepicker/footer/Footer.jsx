import React, { useState } from 'react';
import classNames from 'classnames';

import Index from '../button';

import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.Footer}>
      <Index type="grey">Cancel</Index>
      <Index type="primary">Apply</Index>
    </div>
  );
};

export default Footer;
