import React, { createContext, useContext, useState } from 'react';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import set from 'date-fns/set';

export const DatepickerContext = createContext(null);

export const useDatepicker = () => {
  const {
    selectedMonth,
    selectPrevMonth,
    selectNextMonth,
    setSelectedMonth,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    lastSelectedDate,
    setLastSelectedDate,
  } = useContext(DatepickerContext);

  return {
    selectedMonth,
    selectPrevMonth,
    selectNextMonth,
    setSelectedMonth,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    lastSelectedDate,
    setLastSelectedDate,
  };
};

export const DatepickerProvider = ({ children }) => {
  // Reset hours, minutes, seconds
  const [selectedMonth, setSelectedMonth] = useState(
    set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // lastSelectedDate is a last clicked date
  const [lastSelectedDate, setLastSelectedDate] = useState(false);
  const selectNextMonth = () => setSelectedMonth(addMonths(selectedMonth, 1));
  const selectPrevMonth = () => setSelectedMonth(subMonths(selectedMonth, 1));

  return (
    <DatepickerContext.Provider
      value={{
        lastSelectedDate,
        setLastSelectedDate,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        selectedMonth,
        setSelectedMonth,
        selectNextMonth,
        selectPrevMonth,
      }}
    >
      {children}
    </DatepickerContext.Provider>
  );
};
