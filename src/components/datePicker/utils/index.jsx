import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import isSameDay from 'date-fns/isSameDay';
import differenceInDays from 'date-fns/differenceInDays';

import { DATE_RANGE_ENUM } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const getRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return null;
  }

  if (isSameDay(startDate, endDate) && isToday(startDate)) {
    return DATE_RANGE_ENUM.TODAY;
  }
  if (isSameDay(startDate, endDate) && isYesterday(startDate)) {
    return DATE_RANGE_ENUM.YESTERDAY;
  }

  if (differenceInDays(endDate, startDate) === 6 && isYesterday(endDate)) {
    return DATE_RANGE_ENUM.LAST7DAYS;
  }

  if (differenceInDays(endDate, startDate) === 29 && isYesterday(endDate)) {
    return DATE_RANGE_ENUM.LAST30DAYS;
  }

  if (differenceInDays(endDate, startDate) === 89 && isYesterday(endDate)) {
    return DATE_RANGE_ENUM.LAST90DAYS;
  }

  return DATE_RANGE_ENUM.CUSTOM;
};
