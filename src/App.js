import React, { useState } from 'react';

import Header from './components/header/Header';
import Datepicker from './components/datepicker/Datepicker';

const App = () => {
  const [openDatepicker, setOpenDatepicker] = useState(false);
  const showDatePicker = () => setOpenDatepicker(true);
  const hideDatePicker = () => setOpenDatepicker(false);

  return (
    <>
      <Header onDropdownClick={showDatePicker} />
      <Datepicker open={openDatepicker} onCancel={hideDatePicker} onApply={hideDatePicker} />
    </>
  );
};

export default App;
