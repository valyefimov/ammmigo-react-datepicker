import React from 'react';

import style from './Datepicker.module.css';
import SideMenu from './sideMenu/SideMenu';
import Footer from './footer/Footer';
import CalendarCard from './calendar/CalendarCard';
import { DatepickerProvider } from './state/datepicker';
import DropDown from 'src/components/datepicker/dropdown/DropDown';

const Datepicker = () => (
  <DatepickerProvider>
    <DropDown />
    <div className={style.Modal}>
      <div className={style.Container}>
        <div className={style.Content}>
          <SideMenu />
          <CalendarCard />
        </div>
        <Footer />
      </div>
    </div>
  </DatepickerProvider>
);

export default Datepicker;
