import React from 'react';

import Calendar from './Calendar';
import CalendarHeader from './CalendarHeader';
import style from './CalendarCard.module.css';

const CalendarCard = () => (
  <div className={style.CalendarCard}>
    <CalendarHeader />
    <Calendar />
  </div>
);

export default CalendarCard;
