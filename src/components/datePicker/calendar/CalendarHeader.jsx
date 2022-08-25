import React from 'react';
import startOfToday from 'date-fns/startOfToday';
import format from 'date-fns/format';
import isSameMonth from 'date-fns/isSameMonth';

import Button from '../button';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import useDatePicker from '../hooks/useDatePicker';

import style from './CalendarHeader.module.css';

const CalendarHeader = () => {
  const { selectedMonth, selectNextMonth, selectPrevMonth } = useDatePicker();

  return (
    <div className={style.Header}>
      <Button className={style.Button} onClick={selectPrevMonth}>
        <ChevronLeftIcon />
      </Button>
      {format(selectedMonth, 'LLLL uuuu')}
      <Button className={style.Button} onClick={selectNextMonth} disabled={isSameMonth(startOfToday(), selectedMonth)}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default CalendarHeader;
