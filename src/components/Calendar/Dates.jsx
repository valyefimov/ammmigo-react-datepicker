import React from 'react';
import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from 'date-fns';

import classes from './Calendar.module.css';

const Dates = ({ activeDate, selectedDate, setSelectedDate }) => {
  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;

    const week = [];

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          key={day}
          className={`${isSameMonth(currentDate, activeDate) ? '' : `${classes.iconButton}`} ${
            isSameDay(currentDate, selectedDate) ? `${classes.iconButtonIsActive}` : `${classes.iconButton}`
          }
          ${isSameDay(currentDate, new Date()) ? '' : `${classes.iconButton}`}
          `}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
          role="presentation"
        >
          {format(currentDate, 'd')}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }

    const key = format(currentDate, 'd');

    return (
      <div key={key} className={classes.weekContainer}>
        {week}
      </div>
    );
  };

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth);
  const endDate = endOfWeek(endOfTheSelectedMonth);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(generateDatesForCurrentWeek(currentDate, selectedDate, activeDate));
    currentDate = addDays(currentDate, 7);
  }

  return <div>{allWeeks}</div>;
};

export default Dates;
