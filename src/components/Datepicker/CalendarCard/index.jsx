import React, { useState } from 'react';
import Button from '../Button';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';
import Calendar from "./Calendar";

import style from './CalendarCard.module.css';
import CalendarHeader from "./CalendarHeader";

const CalendarCard = () => {
  return (
    <div className={style.CalendarCard}>
      <CalendarHeader />
      <Calendar />
    </div>
  );
};

export default CalendarCard;
