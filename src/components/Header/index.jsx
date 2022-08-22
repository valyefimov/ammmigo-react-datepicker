import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import classes from './Header.module.css';

import './styles.css';

const Header = ({ setActiveDate, activeDate }) => (
  <div className={classes.calendarMonthWrapper}>
    <div
      className={classes.iconButtonIsSmall}
      onClick={() => setActiveDate(subMonths(activeDate, 1))}
      role="presentation"
    >
      <div className="chevron is-left w-icon-dropdown-toggle" />
    </div>
    <h2 className={classes.textSizeMedium}>{format(activeDate, 'MMMM yyyy')}</h2>
    <div
      className={classes.iconButtonIsSmall}
      onClick={() => setActiveDate(addMonths(activeDate, 1))}
      role="presentation"
    >
      <div className="chevron is-right w-icon-dropdown-toggle" />
    </div>
  </div>
);

export default Header;
