import React from 'react';
import { format } from 'date-fns';

import Header from '../Header';
import WeekDayNames from './WeekDayNames';
import Dates from './Dates';
import style from './Calendar.module.css';

const Calendar = ({ setActiveDate, activeDate, selectedDate, setSelectedDate, startPeriod, endPeriod }) => (
  <section className={style.Wrapper}>
    <Header setActiveDate={setActiveDate} activeDate={activeDate} />
    <WeekDayNames activeDate={activeDate} />
    <Dates
      activeDate={activeDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      startPeriod={startPeriod}
      endPeriod={endPeriod}
    />
    <div className={style.Period}>{`${format(new Date(startPeriod), 'PP')} — ${format(new Date(endPeriod), 'PP')}`}</div>
  </section>
);
export default Calendar;
