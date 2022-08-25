import React from 'react';
import format from 'date-fns/format';

import { useDatepicker } from '../state/datepicker';

import style from './CalendarFooter.module.css';

const CalendarFooter = () => {
  const { startDate, endDate } = useDatepicker();

  return (
    <div className={style.Footer}>
      {startDate ? `${format(startDate, 'MMM dd, uuuu')}   —   ${format(endDate, 'MMM dd, uuuu')}` : null}
    </div>
  );
};

export default CalendarFooter;
