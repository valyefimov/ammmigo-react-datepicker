import React, { useState } from 'react';
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import classNames from 'classnames';

import style from './Calendar.module.css';


const Dates = ({ activeDate, selectedDate, setSelectedDate, startPeriod, setStartPeriod, endPeriod, setEndPeriod, setCustomSelect, setNamePeriod }) => {
  const [clicksCount, setClicksCount] = useState(0);

  const setDiffDates = (cloneDate) => {
    setClicksCount(clicksCount + 1);
    setSelectedDate(cloneDate);
    setCustomSelect(true);
    setNamePeriod('Custom');
    if(clicksCount === 0) {
      setStartPeriod(cloneDate);
    } else {
      setEndPeriod(cloneDate);
      setClicksCount(0);
    }
  }

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;

    const week = [];

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          key={day}
          className={classNames(
            { [style.SelectedRange]: isBefore(new Date(currentDate), new Date(endPeriod)) &&
              isAfter(new Date(currentDate), new Date(startPeriod)) && isSameMonth(currentDate, activeDate) },
            { [style.StartPeriod]: isSameDay(currentDate, startPeriod) &&
              isSameDay(currentDate, startPeriod) !== isSameDay(currentDate, endPeriod) },
            { [style.EndPeriod]: isSameDay(currentDate, endPeriod) &&
              isSameDay(currentDate, startPeriod) !== isSameDay(currentDate, endPeriod) },
          )}
        >
          <div
            className={classNames(
              style.Day,
              { [style.DisableDay]: isAfter(new Date(currentDate), new Date()) },
              { [style.InactiveDay]: !isSameMonth(currentDate, activeDate) },
              { [style.SelectedDay]:
                isSameDay(currentDate, selectedDate) && !isAfter(new Date(currentDate), new Date(endPeriod)) ||
                isSameDay(currentDate, startPeriod) && !isAfter(new Date(currentDate), new Date(endPeriod)) ||
                isSameDay(currentDate, endPeriod) && !isAfter(new Date(currentDate), new Date(endPeriod))
              },
              { [style.Today]: isSameDay(currentDate, new Date()) },
            )}
            onClick={() => setDiffDates(cloneDate)}
            role="presentation"
          >
            {format(currentDate, 'd')}
          </div>
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }

    const key = format(currentDate, 'd');

    return (
      <div key={key} className={style.WeekContainer}>
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
