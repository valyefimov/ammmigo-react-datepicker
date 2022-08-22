import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Calendar from '../Calendar';
import './styles.css';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [startPeriod, setStartPeriod] = useState(new Date());
  const [endPeriod] = useState(new Date());

  return (
    <div className="datepickerWrapper">
      <main className="main">
        <Sidebar setSelectedDate={setSelectedDate} setActiveDate={setActiveDate} setStartPeriod={setStartPeriod} />
        <Calendar
          setActiveDate={setActiveDate}
          activeDate={activeDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          startPeriod={startPeriod}
          endPeriod={endPeriod}
        />
      </main>
      <footer className="footer">
        <button className="btn" type="button">
          Cancel
        </button>
        <button className="btn primary" type="submit">
          Apply
        </button>
      </footer>
    </div>
  );
};

export default Datepicker;
