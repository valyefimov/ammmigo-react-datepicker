import React from 'react';
import classNames from 'classnames';

import style from './Button.module.css';

const Button = ({ children, type, onClick, className, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(style.Button, className, style[`Button-${type}`])}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
