import React from 'react';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';
import differenceInDays from 'date-fns/differenceInDays';
import setDate from 'date-fns/setDate';
import isSameDay from 'date-fns/isSameDay';
import classNames from 'classnames';

import Button from '../button';
import { useDatepicker } from '../state/datepicker';
import style from './Calendar.module.css';

const Calendar = () => {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const { selectedMonth, startDate, endDate, setStartDate, setEndDate, setLastSelectedDate, lastSelectedDate, setIsCustomRange } =
    useDatepicker();
  const startDayOfWeek = startOfMonth(selectedMonth).getDay();
  const endDayOfMonth = endOfMonth(selectedMonth).getDate();
  const weeks = getWeeksInMonth(selectedMonth);
  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === selectedMonth.getFullYear() && today.getMonth() === selectedMonth.getMonth();

  const handleDayClick = (date) => {
    // if date is selected
    if (startDate) {
      if (isSameDay(startDate, date) || isSameDay(endDate, date)) {
        setStartDate(date);
        setEndDate(date);
      } else if (lastSelectedDate === startDate) {
        // if prev. click was on the start date
        // if selected date < start date
        if (differenceInDays(date, startDate) < 0) {
          setStartDate(date);
          // start date become end date
          setEndDate(startDate);
        } else {
          // if selected date > start date
          setEndDate(date);
        }
      } else {
        // if selected date < end date
        // eslint-disable-next-line no-lonely-if
        if (differenceInDays(date, endDate) > 0) {
          setStartDate(endDate);
          // start date become end date
          setEndDate(date);
        } else {
          // if selected date > end date
          setStartDate(date);
        }
      }
    } else {
      setStartDate(date);
      setEndDate(date);
    }

    setLastSelectedDate(date);
    setIsCustomRange(true);
  };

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
                [style.NotCalendarDay]: !displayButton,
                [style.DaySelected]: differenceInDays(date, startDate) >= 0 && differenceInDays(date, endDate) <= 0,
                [style.StartDate]: isSameDay(date, startDate),
                [style.EndDate]: isSameDay(date, endDate),
              })}
            >
              {displayButton ? (
                <Button key={key} onClick={() => handleDayClick(date)} className={style.DayButton}>
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
