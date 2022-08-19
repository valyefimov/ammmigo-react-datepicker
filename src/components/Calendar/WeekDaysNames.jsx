import React from 'react';
import { addDays, format, startOfWeek } from 'date-fns';

const WeekDaysNames = ({activeDate}) => {
  const weekStartDate = startOfWeek(activeDate);
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <div key={day} className="day weekNames">
        {format(addDays(weekStartDate, day), 'EEEEEE')}
      </div>
    );
  }
  return <div className="weekContainer">{weekDays}</div>;
};

export default WeekDaysNames;
