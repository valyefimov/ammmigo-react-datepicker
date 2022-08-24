import React, { useState } from 'react';
import Button from '../Button';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';
import Calendar from './Calendar';
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

import style from './CalendarCard.module.css';
import CalendarHeader from './CalendarHeader';

const CalendarCard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={style.CalendarCard}>
      <CalendarHeader />
      <Calendar />
    </div>
  );
};

export default CalendarCard;
