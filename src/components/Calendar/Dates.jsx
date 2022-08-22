import React from 'react';
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

import './styles.css';

const Dates = ({ activeDate, selectedDate, setSelectedDate, startPeriod, endPeriod }) => {
  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;

    const week = [];

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          key={day}
          className={`
          ${
            isBefore(new Date(currentDate), new Date(endPeriod)) &&
            isAfter(new Date(currentDate), new Date(startPeriod))
              ? 'selectedRange'
              : ''
          }
          ${isSameDay(currentDate, startPeriod) ? 'startPeriod' : ''}
          ${isSameDay(currentDate, endPeriod) ? 'endPeriod' : ''}
          `}
        >
          <div
            className={`day ${isSameMonth(currentDate, activeDate) ? '' : 'inactiveDay'} ${
              isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''
            }
          ${isSameDay(currentDate, new Date()) ? 'today' : ''}
          `}
            onClick={() => {
              setSelectedDate(cloneDate);
            }}
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
      <div key={key} className="weekContainer">
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
