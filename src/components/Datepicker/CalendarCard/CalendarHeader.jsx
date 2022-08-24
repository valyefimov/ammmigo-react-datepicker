import React from 'react';
import Button from '../Button';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';

import style from './CalendarHeader.module.css';

const CalendarHeader = ({ onPrev, onNext }) => {
  return (
    <div className={style.Header}>
      <Button className={style.Button} onClick={onPrev}>
        <ChevronLeftIcon />
      </Button>
      April 2022
      <Button className={style.Button} onClick={onNext}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default CalendarHeader;
