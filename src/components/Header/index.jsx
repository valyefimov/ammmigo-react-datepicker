import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';

import style from './Header.module.css';
import ChevronLeft from '../Icons/chevron-left';
import ChevronRight from '../Icons/chevron-right';

const Header = ({ setActiveDate, activeDate }) => (
  <div className={style.Header}>
    <div className={style.NavIcon} onClick={() => setActiveDate(subMonths(activeDate, 1))} role="presentation">
      <ChevronLeft />
    </div>
    <h2 className={style.CurrentMonth}>{format(activeDate, 'MMMM yyyy')}</h2>
    <div className={style.NavIcon} onClick={() => setActiveDate(addMonths(activeDate, 1))} role="presentation">
      <ChevronRight />
    </div>
  </div>
);

export default Header;
