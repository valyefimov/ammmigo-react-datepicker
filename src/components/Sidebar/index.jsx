import React from 'react';

import style from './Sidebar.module.css';

const Sidebar = ({ setSelectedDate, setActiveDate, setStartPeriod, setNamePeriod }) => {
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
        className={style.NavButton}
        onClick={() => {
          setSelectedDate(yesterday);
          setStartPeriod(yesterday);
          setNamePeriod('Yesterday');
        }}
        role="presentation"
      >
        Yesterday
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          setSelectedDate(today);
          setActiveDate(today);
          setStartPeriod(today);
          setNamePeriod('Today');
        }}
        role="presentation"
      >
        Today
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          setSelectedDate(lastSevenDays);
          setStartPeriod(lastSevenDays);
          setNamePeriod('Last 7 days');
        }}
        role="presentation"
      >
        Last 7 days
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          setSelectedDate(lastThirtyDays);
          setStartPeriod(lastThirtyDays);
          setNamePeriod('Last 30 days');
        }}
        role="presentation"
      >
        Last 30 days
      </div>
      <div
        className={style.NavButton}
        onClick={() => {
          setSelectedDate(lastNinetyDays);
          setStartPeriod(lastNinetyDays);
          setNamePeriod('Last 90 days');
        }}
        role="presentation"
      >
        Last 90 days
      </div>
    </div>
  );
};

export default Sidebar;
