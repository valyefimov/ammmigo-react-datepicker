import React, { useState } from 'react';

import Header from './components/header/Header';
import DatePicker from './components/datePicker/DatePicker';

const App = () => {
  // dateRange is an object with { startDate, endDate } fields
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const showDatePicker = () => setOpenDatePicker(true);
  const hideDatePicker = () => setOpenDatePicker(false);
  const handleApply = (range) => {
    setOpenDatePicker(false);
    setDateRange(range);
  };

  window.setDateRange = setDateRange;

  return (
    <>
      <Header dateRange={dateRange} onDropdownClick={showDatePicker} />
      <DatePicker dateRange={dateRange} open={openDatePicker} onCancel={hideDatePicker} onApply={handleApply} />
    </>
  );
};

export default App;
