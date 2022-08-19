import React from 'react';
import './styles.css';
import Today from './Today';
import Yesterday from './Yesterday';
import Custom from './Custom';
import LastThirtyDays from './LastThirtyDays';
import LastNinetyDays from './LastNinetyDays';
import LastSevenDays from './LastSevenDays';

function Sidebar() {
  return (
    <div className="dropdown_item-wrapper is-calendar">
      <Today />
      <Yesterday />
      <LastSevenDays />
      <LastThirtyDays />
      <LastNinetyDays />
      <Custom />
    </div>
  );
}

export default Sidebar;
