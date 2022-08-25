import React from 'react';
import ChevronDown from '../Icons/ChevronDown';

import style from './Header.module.css';

const Header = ({ onDropdownClick }) => (
  <div className={style.Header}>
    <button type="button" className={style.Dropdown} onClick={onDropdownClick}>
      Last 7 days <ChevronDown />
    </button>
  </div>
);

export default Header;
