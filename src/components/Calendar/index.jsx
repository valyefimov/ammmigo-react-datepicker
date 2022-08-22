import React from 'react';
import { format } from 'date-fns';

import Header from '../Header';
import WeekDayNames from './WeekDayNames';
import Dates from './Dates';
import './styles.css';

const Calendar = ({ setActiveDate, activeDate, selectedDate, setSelectedDate, startPeriod, endPeriod }) => (
  <section>
    <Header setActiveDate={setActiveDate} activeDate={activeDate} />
    <WeekDayNames activeDate={activeDate} />
    <Dates
      activeDate={activeDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      startPeriod={startPeriod}
    />
    <div className="period">{`${format(new Date(startPeriod), 'PP')} — ${format(new Date(endPeriod), 'PP')}`}</div>
  </section>
);
export default Calendar;
