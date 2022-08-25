import React from 'react';
import format from 'date-fns/format';

import Button from '../button';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import { useDatepicker } from "../state/datepicker";

import style from './CalendarHeader.module.css';

const CalendarHeader = () => {
  const { selectedMonth, selectNextMonth, selectPrevMonth } = useDatepicker();

  return (
    <div className={style.Header}>
      <Button className={style.Button} onClick={selectPrevMonth}>
        <ChevronLeftIcon />
      </Button>
      {format(selectedMonth, 'LLLL uuuu')}
      <Button className={style.Button} onClick={selectNextMonth}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default CalendarHeader;
