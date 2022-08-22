import React from 'react';

import './styles.css';

const Sidebar = ({ setSelectedDate, setActiveDate, setStartPeriod }) => {
  const today = new Date();
  const yesterday = new Date(today);
  const lastSevenDays = new Date(today);
  const lastThirtyDays = new Date(today);
  const lastNinetyDays = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  lastSevenDays.setDate(lastSevenDays.getDate() - 6);
  lastThirtyDays.setDate(lastThirtyDays.getDate() - 29);
  lastNinetyDays.setDate(lastNinetyDays.getDate() - 89);

  return (
    <div>
      <div
        className="navButton"
        onClick={() => {
          setSelectedDate(yesterday);
          setActiveDate(yesterday);
          setStartPeriod(yesterday);
        }}
        role="presentation"
      >
        Yesterday
      </div>
      <div
        className="navButton"
        onClick={() => {
          setSelectedDate(today);
          setActiveDate(today);
          setStartPeriod(today);
        }}
        role="presentation"
      >
        Today
      </div>
      <div
        className="navButton"
        onClick={() => {
          setSelectedDate(lastSevenDays);
          setActiveDate(lastSevenDays);
          setStartPeriod(lastSevenDays);
        }}
        role="presentation"
      >
        Last 7 days
      </div>
      <div
        className="navButton"
        onClick={() => {
          setSelectedDate(lastThirtyDays);
          setActiveDate(lastThirtyDays);
          setStartPeriod(lastThirtyDays);
        }}
        role="presentation"
      >
        Last 30 days
      </div>
      <div
        className="navButton"
        onClick={() => {
          setSelectedDate(lastNinetyDays);
          setActiveDate(lastNinetyDays);
          setStartPeriod(lastNinetyDays);
        }}
        role="presentation"
      >
        Last 90 days
      </div>
    </div>
  );
};

export default Sidebar;
