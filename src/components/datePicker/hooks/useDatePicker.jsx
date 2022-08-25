import { useContext } from 'react';

import DatePickerContext from '../DatePickerContext';

const useDatePicker = () => {
  const {
    endDate,
    lastSelectedDate,
    selectedRange,
    selectedMonth,
    selectNextMonth,
    selectPrevMonth,
    setEndDate,
    setLastSelectedDate,
    setSelectedMonth,
    setStartDate,
    startDate,
  } = useContext(DatePickerContext);

  return {
    endDate,
    lastSelectedDate,
    selectedRange,
    selectedMonth,
    selectNextMonth,
    selectPrevMonth,
    setEndDate,
    setLastSelectedDate,
    setSelectedMonth,
    setStartDate,
    startDate,
  };
};

export default useDatePicker;
