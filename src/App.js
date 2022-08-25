import React, { useState } from 'react';

import Datepicker from './components/datepicker/Datepicker';
import Header from './components/Header/Header';

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
