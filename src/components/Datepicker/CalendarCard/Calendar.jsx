import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../Button';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';

import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getWeeksInMonth,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import style from './Calendar.module.css';

const Calendar = () => {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const date = new Date();
  const startDayOfWeek = startOfMonth(date).getDay();
  const endDayOfMonth = endOfMonth(date).getDate();
  const weeks = getWeeksInMonth(date);

  return (
    <div className={style.Calendar}>
      {weekDays.map((weekDay) => (
        <div className={style.Weekday}>{weekDay}</div>
      ))}

      {new Array(weeks).fill(weeks).map((week, weekIndex) => {
        return weekDays.map((weekDay, weekDayIndex) => {
          const day = weekIndex * 7 + weekDayIndex + 1 - startDayOfWeek;
          const displayButton = day <= endDayOfMonth && (weekIndex > 0 || weekDayIndex >= startDayOfWeek);

          return displayButton ? (
            <Button className={classNames(style.Day, style.DayButton)}>{day}</Button>
          ) : (
            <div className={style.Day} />
          );
        });
      })}
    </div>
  );
};

export default Calendar;
