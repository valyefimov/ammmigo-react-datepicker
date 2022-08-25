import React, { useEffect, useMemo, useState } from 'react';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import startOfDay from 'date-fns/startOfDay';
import classNames from 'classnames';

import DatePickerContext from './DatePickerContext';
import SideMenu from './sideMenu/SideMenu';
import Footer from './footer/Footer';
import CalendarCard from './calendar/CalendarCard';
import { getRange } from './utils';

import style from './DatePicker.module.css';

/**
 *
 * @param dateRange - object with { startDate, endDate }
 * @param open - boolean, pass true if you need to open date picker
 * @param onCancel - callback is fired when modal is closed
 * @param onApply - callback is when Apply button is clicked
 * @returns {JSX.Element}
 * @constructor
 */
const DatePicker = ({ dateRange = { startDate: null, endDate: null }, open, onCancel, onApply }) => {
  const [startDate, setStartDate] = useState(dateRange.startDate ? startOfDay(dateRange.startDate) : null);
  const [endDate, setEndDate] = useState(dateRange.startDate ? startOfDay(dateRange.endDate) : null);
  // today, yesterday, week ago, etc
  const selectedRange = useMemo(() => getRange(startDate, endDate), [startDate, endDate]);
  const [selectedMonth, setSelectedMonth] = useState(startOfDay(dateRange.endDate || Date.now()));

  // lastSelectedDate is a last clicked date
  const [lastSelectedDate, setLastSelectedDate] = useState(false);

  useEffect(() => {
    setStartDate(dateRange.startDate);
    setEndDate(dateRange.endDate);
    setSelectedMonth(startOfDay(dateRange.endDate || Date.now()));
  }, [dateRange]);

  const selectNextMonth = () => setSelectedMonth(addMonths(selectedMonth, 1));
  const selectPrevMonth = () => setSelectedMonth(subMonths(selectedMonth, 1));
  const handleBackDropClick = (event) => {
    // if click was on the main modal container with fixed position
    if (event.target.dataset.backdrop) {
      onCancel();
    }
  };

  return (
    <DatePickerContext.Provider
      value={{
        lastSelectedDate,
        setLastSelectedDate,
        startDate,
        endDate,
        selectedRange,
        setStartDate,
        setEndDate,
        selectedMonth,
        setSelectedMonth,
        selectNextMonth,
        selectPrevMonth,
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
      <div
        className={classNames(style.Modal, { [style.ModalOpen]: open })}
        onClick={handleBackDropClick}
        data-backdrop="true"
      >
        <div className={style.Container}>
          <div className={style.Content}>
            <SideMenu />
            <CalendarCard />
          </div>
          <Footer onCancel={onCancel} onApply={() => onApply({ startDate, endDate })} />
        </div>
      </div>
    </DatePickerContext.Provider>
  );
};

export default DatePicker;
