import React, { useState } from 'react';
import classNames from 'classnames';

// import Sidebar from '../Sidebar';
// import Calendar from '../Calendar';
import style from './Datepicker.module.css';
import SideMenu from './SideMenu';
import Footer from './Footer';
import CalendarCard from './CalendarCard';
// import ChevronDown from '../Icons/chevron-down';

const Datepicker = () => (
  <div className={style.Modal}>
    <div className={style.Container}>
      <div className={style.Content}>
        <SideMenu />
        <CalendarCard />
      </div>
      <Footer />
    </div>
  </div>
);
// const [selectedDate, setSelectedDate] = useState(new Date());
// const [activeDate, setActiveDate] = useState(new Date());
// const [startPeriod, setStartPeriod] = useState(new Date());
// const [endPeriod, setEndPeriod] = useState(new Date());
// const [namePeriod, setNamePeriod] = useState('Today');
// const [show, setShow] = useState(false);
//
// return (
//   <div className={style.Datepicker}>
//     <div
//       className={style.DropdownWrapper}
//       onClick={() => setShow(true)}
//       onKeyDown={() => setShow(true)}
//       role="presentation"
//     >
//       <div className={style.Dropdown}>
//         <div>{namePeriod}</div>
//         <div className={style.ChevronPosition}>
//           <ChevronDown />
//         </div>
//       </div>
//     </div>
//
//     <div
//       className={classNames(style.Modal, { [style.Active]: show })}
//       onClick={() => setShow(false)}
//       onKeyDown={() => setShow(false)}
//       role="presentation"
//     >
//       <div
//         className={style.Wrapper}
//         onClick={(e) => e.stopPropagation()}
//         onKeyDown={(e) => e.stopPropagation()}
//         role="presentation"
//       >
//         <main className={style.Main}>
//           <Sidebar
//             setSelectedDate={setSelectedDate}
//             setActiveDate={setActiveDate}
//             setStartPeriod={setStartPeriod}
//             setEndPeriod={setEndPeriod}
//             setNamePeriod={setNamePeriod}
//             namePeriod={namePeriod}
//           />
//           <Calendar
//             setActiveDate={setActiveDate}
//             activeDate={activeDate}
//             selectedDate={selectedDate}
//             setSelectedDate={setSelectedDate}
//             startPeriod={startPeriod}
//             setStartPeriod={setStartPeriod}
//             endPeriod={endPeriod}
//             setEndPeriod={setEndPeriod}
//             setNamePeriod={setNamePeriod}
//           />
//         </main>
//         <footer className={style.Footer}>
//           <button className={style.Btn} type="button" onClick={() => setShow(false)}>
//             Cancel
//           </button>
//           <button className={classNames(style.Btn, style.Primary)} type="submit" onClick={() => setShow(false)}>
//             Apply
//           </button>
//         </footer>
//       </div>
//     </div>
//   </div>
// );
export default Datepicker;
