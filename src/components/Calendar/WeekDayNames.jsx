import React from 'react';
import { addDays, format, startOfWeek } from 'date-fns';
import classes from './Calendar.module.css';

const WeekDayNames = ({ activeDate }) => {
  const weekStartDate = startOfWeek(activeDate);
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <div key={day} className={classes.calendarDayLabel}>
        {format(addDays(weekStartDate, day), 'EEEEEE')}
      </div>
    );
  }
  return <div className={classes.calendarDayWrapper}>{weekDays}</div>;
};

export default WeekDayNames;
