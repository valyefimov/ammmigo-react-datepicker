import React from 'react';
import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from 'date-fns';

const Dates = ({activeDate, selectedDate, setSelectedDate}) => {
  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          key={day}
          className={`day ${
            isSameMonth(currentDate, activeDate) ? '' : 'inactiveDay'
          } ${isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''}
          ${isSameDay(currentDate, new Date()) ? 'today' : ''}`}
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
    return <div className="weekContainer">{week}</div>;
  };

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth);
  const endDate = endOfWeek(endOfTheSelectedMonth);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(
      generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
    );
    currentDate = addDays(currentDate, 7);
  }

  return <div>{allWeeks}</div>;
}

export default Dates;
