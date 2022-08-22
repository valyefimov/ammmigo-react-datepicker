import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import classes from './Header.module.css';

import ChevronLeft from '../Icons/chevron-left';
import ChevronRight from '../Icons/chevron-right';

const Header = ({ setActiveDate, activeDate }) => (
  <div className={classes.calendarMonthWrapper}>
    <div
      className={classes.iconButtonIsSmall}
      onClick={() => setActiveDate(subMonths(activeDate, 1))}
      role="presentation"
    >
      <ChevronLeft />
    </div>
    <h2 className={classes.textSizeMedium}>{format(activeDate, 'MMMM yyyy')}</h2>
    <div
      className={classes.iconButtonIsSmall}
      onClick={() => setActiveDate(addMonths(activeDate, 1))}
      role="presentation"
    >
      <ChevronRight />
    </div>
  </div>
);

export default Header;
