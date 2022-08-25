import React, { useMemo } from 'react';
import format from 'date-fns/format';
import { DATE_RANGE_ENUM } from '../datePicker/constants';
import { getRange } from '../datePicker/utils';

import ChevronDown from '../Icons/ChevronDown';

import style from './Header.module.css';

const Header = ({ onDropdownClick, dateRange }) => {
  const { startDate, endDate } = dateRange || {};
  const rangeTitle = useMemo(() => {
    const rangeTextMap = {
      [DATE_RANGE_ENUM.TODAY]: 'Today',
      [DATE_RANGE_ENUM.YESTERDAY]: 'Yesterday',
      [DATE_RANGE_ENUM.LAST7DAYS]: 'Last 7 days',
      [DATE_RANGE_ENUM.LAST30DAYS]: 'Last 30 days',
      [DATE_RANGE_ENUM.LAST90DAYS]: 'Last 90 days',
    };
    const selectedRange = getRange(startDate, endDate);

    const selectedRangeText = rangeTextMap[selectedRange];

    if (startDate) {
      return selectedRangeText || `${format(startDate, 'MMM dd, uuuu')}   —   ${format(endDate, 'MMM dd, uuuu')}`;
    }

    return null;
  }, [startDate, endDate]);

  return (
    <div className={style.Header}>
      <button type="button" className={style.Dropdown} onClick={onDropdownClick}>
        {startDate ? rangeTitle : 'Choose date'}
        <ChevronDown />
      </button>
    </div>
  );
};

export default Header;
