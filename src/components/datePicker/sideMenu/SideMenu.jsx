import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import subDays from 'date-fns/subDays';
import startOfYesterday from 'date-fns/startOfYesterday';
import startOfToday from 'date-fns/startOfToday';

import { DATE_RANGE_ENUM } from '../constants';
import useDatePicker from '../hooks/useDatePicker';
import TickIcon from '../icons/TickIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

import style from './SideMenu.module.css';

const SideMenu = () => {
  const [isCustomRange, setIsCustomRange] = useState(false);
  const { setStartDate, setEndDate, setSelectedMonth, selectedRange } = useDatePicker();
  const today = startOfToday();

  useEffect(() => {
    setIsCustomRange(selectedRange === DATE_RANGE_ENUM.CUSTOM);
  }, [selectedRange]);

  const buttons = [
    {
      title: 'Today',
      isActive: !isCustomRange && selectedRange === DATE_RANGE_ENUM.TODAY,
      onClick: () => {
        setSelectedMonth(today);
        setStartDate(today);
        setEndDate(today);
      },
    },
    {
      title: 'Yesterday',
      isActive: !isCustomRange && selectedRange === DATE_RANGE_ENUM.YESTERDAY,
      onClick: () => {
        const yesterday = startOfYesterday();

        setSelectedMonth(yesterday);
        setStartDate(yesterday);
        setEndDate(yesterday);
      },
    },
    {
      title: 'Last 7 days',
      isActive: !isCustomRange && selectedRange === DATE_RANGE_ENUM.LAST7DAYS,
      onClick: () => {
        setSelectedMonth(today);
        setStartDate(subDays(today, 7));
        setEndDate(subDays(today, 1));
      },
    },
    {
      title: 'Last 30 days',
      isActive: !isCustomRange && selectedRange === DATE_RANGE_ENUM.LAST30DAYS,
      onClick: () => {
        setSelectedMonth(today);
        setStartDate(subDays(today, 30));
        setEndDate(subDays(today, 1));
      },
    },
    {
      title: 'Last 90 days',
      isActive: !isCustomRange && selectedRange === DATE_RANGE_ENUM.LAST90DAYS,
      onClick: () => {
        setSelectedMonth(today);
        setStartDate(subDays(today, 90));
        setEndDate(subDays(today, 1));
      },
    },
    {
      title: 'Custom',
      isActive: isCustomRange,
      onClick: () => setIsCustomRange(true),
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
          {isCustomRange ? <ChevronRightIcon /> : <TickIcon />}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
