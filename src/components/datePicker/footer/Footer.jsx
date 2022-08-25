import React from 'react';

import Button from '../button';

import style from './Footer.module.css';

const Footer = ({ onCancel, onApply }) => (
  <div className={style.Footer}>
    <Button type="grey" onClick={onCancel}>
      Cancel
    </Button>
    <Button type="primary" onClick={onApply}>
      Apply
    </Button>
  </div>
);

export default Footer;
