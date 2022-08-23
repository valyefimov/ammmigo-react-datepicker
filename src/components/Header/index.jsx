import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';

import style from './Header.module.css';

const Header = ({ setActiveDate, activeDate }) => (
  <div className={style.Header}>
    <div className={style.NavIcon} onClick={() => setActiveDate(subMonths(activeDate, 1))} role="presentation">
      {'<'}
    </div>
    <h2 className={style.CurrentMonth}>{format(activeDate, 'MMMM yyyy')}</h2>
    <div className={style.NavIcon} onClick={() => setActiveDate(addMonths(activeDate, 1))} role="presentation">
      {'>'}
    </div>
  </div>
);

export default Header;
