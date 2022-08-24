import React from 'react';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';
import differenceInDays from 'date-fns/differenceInDays';
import setDate from 'date-fns/setDate';
import classNames from 'classnames';

import Button from '../button';
import { useDatepicker } from '../state/datepicker';
import style from './Calendar.module.css';

const Calendar = () => {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const { selectedMonth, startDate, endDate } = useDatepicker();
  const startDayOfWeek = startOfMonth(selectedMonth).getDay();
  const endDayOfMonth = endOfMonth(selectedMonth).getDate();
  const weeks = getWeeksInMonth(selectedMonth);
  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === selectedMonth.getFullYear() && today.getMonth() === selectedMonth.getMonth();

  return (
    <div className={style.Calendar}>
      {weekDays.map((weekDay) => (
        <div key={weekDay} className={style.Weekday}>
          {weekDay}
        </div>
      ))}

      {new Array(weeks).fill(weeks).map((week, weekIndex) =>
        weekDays.map((weekDay, weekDayIndex) => {
          const day = weekIndex * 7 + weekDayIndex + 1 - startDayOfWeek;
          const displayButton = day <= endDayOfMonth && (weekIndex > 0 || weekDayIndex >= startDayOfWeek);
          const isToday = isCurrentMonth ? today.getDate() === day : false;
          const key = `${day - weekIndex * 7 + weekDayIndex}`;
          const date = setDate(selectedMonth, day);

          return (
            <div
              key={key}
              className={classNames(style.Day, {
                [style.Today]: isToday,
                [style.DaySelected]: differenceInDays(date, startDate) >= 0 && differenceInDays(date, endDate) <= 0,
                [style.StartOrEndDay]: differenceInDays(date, startDate) === 0 || differenceInDays(date, endDate) === 0,
              })}
            >
              {displayButton ? (
                <Button key={key} className={style.DayButton}>
                  {day}
                </Button>
              ) : null}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Calendar;
