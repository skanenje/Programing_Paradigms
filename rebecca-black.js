const isFriday = (date) => {
    if (typeof date === 'number'){
      date = new Date(date);
    }
    return date.getDay() === 5;
  }
  const isWeekend = (date) => {
    if (typeof date === 'number'){
      date = new Date(date);
    }
   return  (date.getDay() === 6 || date.getDay() === 0) ;
  }
  const isLeapYear = (input) => {
    let year;
  
    if (typeof input === 'number') {
      year = input;
    } else if (input instanceof Date) {
      year = input.getFullYear();
    } else {
      throw new TypeError('Invalid input: expected a number or Date object');
    }
  
    if (!Number.isInteger(year) || year < 1) {
      throw new RangeError('Year must be a positive integer');
    }
  
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };
  function isLastDayOfMonth(date) {
    // Get the current month
    const currentMonth = date.getMonth();
    
    // Create a new date object for the first day of the next month
    const nextMonth = new Date(date.getFullYear(), currentMonth + 1, 1);
    
    // Subtract one day to get the last day of the current month
    const lastDay = new Date(nextMonth.getTime() - 86400000);
    
    // Compare the input date with the calculated last day of the month
    return date.getDate() === lastDay.getDate();
  }