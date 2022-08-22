import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';

import './styles.css';

const Header = ({ setActiveDate, activeDate }) => (
  <div className="header">
    <div className="navIcon" onClick={() => setActiveDate(subMonths(activeDate, 1))} role="presentation">
      {'<'}
    </div>
    <h2 className="currentMonth">{format(activeDate, 'MMMM yyyy')}</h2>
    <div className="navIcon" onClick={() => setActiveDate(addMonths(activeDate, 1))} role="presentation">
      {'>'}
    </div>
  </div>
);

export default Header;
