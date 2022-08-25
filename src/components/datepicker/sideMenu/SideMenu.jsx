import React, { useState } from 'react';
import classNames from 'classnames';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import differenceInDays from 'date-fns/differenceInDays';
import startOfYesterday from 'date-fns/startOfYesterday';

import { useDatepicker } from '../state/datepicker';
import style from './SideMenu.module.css';
import TickIcon from '../icons/TickIcon';

const SideMenu = () => {
  const { startDate, endDate, setStartDate, setEndDate, setSelectedMonth } = useDatepicker();

  const buttons = [
    {
      title: 'Today',
      isActive: startDate === endDate && isToday(startDate),
      onClick: () => {
        const today = new Date();

        setSelectedMonth(today);
        setStartDate(today);
        setEndDate(today);
      },
    },
    {
      title: 'Yesterday',
      isActive: startDate === endDate && isYesterday(startDate),
      onClick: () => {
        const yesterday = startOfYesterday();

        setSelectedMonth(yesterday);
        setStartDate(yesterday);
        setEndDate(yesterday);
      },
    },
    {
      title: 'Last 7 days',
      isActive: differenceInDays(endDate, startDate) === 6 && isYesterday(endDate),
      onClick: () => {
        const today = new Date();

        setSelectedMonth(today);
        setStartDate(subDays(today, 7));
        setEndDate(subDays(today, 1));
      },
    },
    {
      title: 'Last 30 days',
      isActive: differenceInDays(endDate, startDate) === 29 && isYesterday(endDate),
      onClick: () => {
        const today = new Date();

        setSelectedMonth(today);
        setStartDate(subDays(today, 30));
        setEndDate(subDays(today, 1));
      },
    },
    {
      title: 'Last 90 days',
      isActive: differenceInDays(endDate, startDate) === 89 && isYesterday(endDate),
      onClick: () => {
        const today = new Date();

        setSelectedMonth(today);
        setStartDate(subDays(today, 90));
        setEndDate(subDays(today, 1));
      },
    },
    {
      title: 'Custom',
      isActive: false, //startDate === endDate && isYesterday(startDate),
      onClick: () => {
        // const yesterday = startOfYesterday();
        //
        // setSelectedMonth(yesterday);
        // setStartDate(yesterday);
        // setEndDate(yesterday);
      },
    },
  ];

  return (
    <div className={style.SideMenu}>
      {buttons.map((button) => (
        <button
          type="button"
          key={button.title}
          onClick={button.onClick}
          className={classNames(style.Button, { [style.ButtonActive]: button.isActive })}
        >
          {button.title}
          <TickIcon />
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
