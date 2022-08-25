import React, { useState } from 'react';
import style from './DropDown.module.css';
import ChevronDown from '../../Icons/chevron-down';

const DropDown = () => {
  const [namePeriod] = useState('Today');
  return (
    <div className={style.Dropdown}>
      <div>{namePeriod}</div>
      <div className={style.ChevronPosition}>
        <ChevronDown />
      </div>
    </div>
  );
};

export default DropDown;
