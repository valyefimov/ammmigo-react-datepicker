import React from 'react';

import Calendar from './Calendar';
import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';

import style from './CalendarCard.module.css';

const CalendarCard = () => (
  <div className={style.CalendarCard}>
    <CalendarHeader />
    <Calendar />
    <CalendarFooter />
  </div>
);

export default CalendarCard;
