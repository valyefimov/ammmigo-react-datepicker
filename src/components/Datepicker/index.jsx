import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Calendar from '../Calendar';
import classes from './Datepicker.module.css';
import Footer from '../Footer';
import ChevronDown from '../Icons/chevron-down';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [startPeriod, setStartPeriod] = useState(new Date());
  const [endPeriod] = useState(new Date());

  return (
    <div className={classes.headerComponent}>
      <div className={classes.container}>
        <div className={classes.pagePadding}>
          <div className={classes.headerLayout}>
            <div className={classes.headerTitleWrapper}>
              <h1 className={classes.headerTitleMobile}>Analytics</h1>
            </div>
            <div className={classes.headerDropdownWrapper}>
              <div
                data-hover="false"
                data-delay={0}
                id="w-node-_50e2ef86-555b-d26b-5be7-ca8e5be1ec28-318c2b43"
                className={classes.dropdownComponent}
                style={{ zIndex: 901 }}
              >
                <div
                  className={classes.dropdownToggle}
                  id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0"
                  aria-haspopup="menu"
                  aria-expanded="true"
                  role="button"
                  tabIndex={0}
                >
                  <div className={classes.dropdownOverlay} style={{ display: 'block' }} />
                  <div className={classes.dropdownToggleContent}>
                    <div>Last 7 days</div>
                    <div className={classes.chevronPosition}>
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <nav className={classes.dropdownList} id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                <div className={classes.calendarComponent}>
                  <Sidebar
                    setSelectedDate={setSelectedDate}
                    setActiveDate={setActiveDate}
                    setStartPeriod={setStartPeriod}
                  />
                  <Calendar
                    setActiveDate={setActiveDate}
                    activeDate={activeDate}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    startPeriod={startPeriod}
                    endPeriod={endPeriod}
                    className={classes.calendarDayWrapper}
                  />
                </div>
                <Footer />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datepicker;
