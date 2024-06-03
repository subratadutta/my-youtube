export const calculateDateTimeDifference = (startDateStr, endDateStr) => {
  // Parse the date strings into Date objects
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Ensure the dates are valid
  if (isNaN(startDate) || isNaN(endDate)) {
    throw new Error("Invalid Date strings provided");
  }

  // Calculate the total difference in milliseconds
  let diffInMilliseconds = endDate - startDate;

  if (diffInMilliseconds < 0) {
    throw new Error("End date must be after start date");
  }

  // Helper function to add/subtract a number of months to/from a date
  function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  // Helper function to calculate the difference in whole units
  function calculateDiff(start, end, unit) {
    let diff = end[unit]() - start[unit]();
    start[unit](start[unit]() + diff);
    if (end < start) {
      diff--;
      start[unit](start[unit]() - 1);
    }
    return diff;
  }

  const start = new Date(startDate.getTime());

  // Calculate years
  let years = endDate.getFullYear() - start.getFullYear();
  start.setFullYear(start.getFullYear() + years);
  if (endDate < start) {
    years--;
    start.setFullYear(start.getFullYear() - 1);
  }

  // Calculate months
  let months = endDate.getMonth() - start.getMonth();
  start.setMonth(start.getMonth() + months);
  if (endDate < start) {
    months--;
    start.setMonth(start.getMonth() - 1);
  }

  // Calculate days
  let days = endDate.getDate() - start.getDate();
  start.setDate(start.getDate() + days);
  if (endDate < start) {
    days--;
    start.setDate(start.getDate() - 1);
  }

  // Calculate hours
  let hours = endDate.getHours() - start.getHours();
  start.setHours(start.getHours() + hours);
  if (endDate < start) {
    hours--;
    start.setHours(start.getHours() - 1);
  }

  // Calculate minutes
  let minutes = endDate.getMinutes() - start.getMinutes();
  start.setMinutes(start.getMinutes() + minutes);
  if (endDate < start) {
    minutes--;
    start.setMinutes(start.getMinutes() - 1);
  }

  //return { years, months, days, hours, minutes };
  if (years > 0) {
    return { years };
  } else if (months > 0) {
    return { months };
  } else if (days > 0) {
    return { days };
  } else if (hours > 0) {
    return { hours };
  } else {
    return { minutes };
  }
};
