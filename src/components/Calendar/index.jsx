import React, { useState } from 'react';

import Header from '../Header';
import WeekDaysNames from './WeekDaysNames';
import Dates from './Dates';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <section>
      <Header setSelectedDate={setSelectedDate} setActiveDate={setActiveDate} activeDate={activeDate} />
      <WeekDaysNames activeDate={activeDate} />
      <Dates activeDate={activeDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </section>
  );
};

export default Calendar;
