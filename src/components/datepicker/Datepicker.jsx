import React from 'react';
import classNames from 'classnames';

import style from './Datepicker.module.css';
import SideMenu from './sideMenu/SideMenu';
import Footer from './footer/Footer';
import CalendarCard from './calendar/CalendarCard';
import { DatepickerProvider } from './state/datepicker';

const Datepicker = ({ open, onCancel, onApply }) => (
  <DatepickerProvider>
    <div className={classNames(style.Modal, { [style.ModalOpen]: open })}>
      <div className={style.Container}>
        <div className={style.Content}>
          <SideMenu />
          <CalendarCard />
        </div>
        <Footer onCancel={onCancel} onApply={onApply} />
      </div>
    </div>
  </DatepickerProvider>
);

export default Datepicker;
