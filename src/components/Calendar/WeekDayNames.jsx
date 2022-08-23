import React from 'react';
import { addDays, format, startOfWeek } from 'date-fns';
import classNames from 'classnames';

import style from './Calendar.module.css';

const WeekDayNames = ({ activeDate }) => {
  const weekStartDate = startOfWeek(activeDate);
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <div key={day} className={classNames(style.Day, style.WeekNames)}>
        {format(addDays(weekStartDate, day), 'EEEEEE')}
      </div>
    );
  }
  return <div className={style.WeekContainer}>{weekDays}</div>;
};

export default WeekDayNames;
