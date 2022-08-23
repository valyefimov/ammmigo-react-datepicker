import React, { useState } from 'react';
import classNames from 'classnames';

import style from './Button.module.css';

const Button = ({ children, type, onClick, className }) => (
  <button type="button" onClick={onClick} className={classNames(style.Button, className, style[`Button-${type}`])}>
    {children}
  </button>
);

export default Button;
