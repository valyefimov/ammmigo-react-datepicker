import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';

const Header = ({setSelectedDate, setActiveDate, activeDate}) => {
  console.log(new Date());
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <div className="header">
      <div
        className="todayButton"
        onClick={() => {
          setSelectedDate(yesterday);
          setActiveDate(yesterday);
        }}
      >
        Yesterday
      </div>
      <div
        className="todayButton"
        onClick={() => {
          setSelectedDate(today);
          setActiveDate(today);
        }}
      >
        Today
      </div>
      <div
        className="navIcon"
        onClick={() => setActiveDate(subMonths(activeDate, 1))}
      >
        {'<'}
      </div>
      <h2 className="currentMonth">{format(activeDate, 'MMMM yyyy')}</h2>
      <div
        className="navIcon"
        onClick={() => setActiveDate(addMonths(activeDate, 1))}
      >
        {'>'}
      </div>
    </div>
  );
};

export default Header;
