import React from 'react';
import classNames from 'classnames';

import style from './Sidebar.module.css';
import ChevronRight from '../Icons/chevron-right';

const Sidebar = ({ setSelectedDate, setActiveDate, setStartPeriod, setNamePeriod, namePeriod, setEndPeriod }) => {
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
    <div className={style.NavButtonPosition}>
      <div
        className={classNames(style.NavButton, { [style.ButtonActive]: namePeriod === 'Today' })}
        onClick={() => {
          setSelectedDate(today);
          setActiveDate(today);
          setStartPeriod(today);
          setNamePeriod('Today');
          setEndPeriod(today);
        }}
        role="presentation"
      >
        Today
      </div>
      <div
        className={classNames(style.NavButton, { [style.ButtonActive]: namePeriod === 'Yesterday' })}
        onClick={() => {
          setSelectedDate(yesterday);
          setActiveDate(yesterday);
          setStartPeriod(yesterday);
          setNamePeriod('Yesterday');
          setEndPeriod(today);
        }}
        role="presentation"
      >
        Yesterday
      </div>
      <div
        className={classNames(style.NavButton, { [style.ButtonActive]: namePeriod === 'Last 7 days' })}
        onClick={() => {
          setSelectedDate(lastSevenDays);
          setStartPeriod(lastSevenDays);
          setNamePeriod('Last 7 days');
          setEndPeriod(today);
        }}
        role="presentation"
      >
        Last 7 days
      </div>
      <div
        className={classNames(style.NavButton, { [style.ButtonActive]: namePeriod === 'Last 30 days' })}
        onClick={() => {
          setSelectedDate(lastThirtyDays);
          setStartPeriod(lastThirtyDays);
          setNamePeriod('Last 30 days');
          setEndPeriod(today);
        }}
        role="presentation"
      >
        Last 30 days
      </div>
      <div
        className={classNames(style.NavButton, { [style.ButtonActive]: namePeriod === 'Last 90 days' })}
        onClick={() => {
          setSelectedDate(lastNinetyDays);
          setStartPeriod(lastNinetyDays);
          setNamePeriod('Last 90 days');
          setEndPeriod(today);
        }}
        role="presentation"
      >
        Last 90 days
      </div>
      <div
        className={classNames(style.NavButton, { [style.CustomButtonActive]: namePeriod === 'Custom' })}
        role="presentation"
      >
        Custom
        <ChevronRight />
      </div>
    </div>
  );
};

export default Sidebar;
