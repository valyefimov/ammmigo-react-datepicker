import React from 'react';

import style from './App.module.css';
import Datepicker from './components/Datepicker';

const App = () => (
  <div className={style.Header}>
    <Datepicker />
  </div>
);

export default App;
