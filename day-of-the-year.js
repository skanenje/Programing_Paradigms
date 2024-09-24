function dayOfTheYear(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
  
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed
    const day = date.getDate();
  
    // Array to store the number of days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Check if it's a leap year and update February if necessary
    if (isLeapYear(year)) {
      daysInMonth[1] = 29;
    }
  
    // Calculate the day of the year
    let dayOfYear = day;
    for (let i = 0; i < month; i++) {
      dayOfYear += daysInMonth[i];
    }
  
    return dayOfYear;
  }
  
  // Helper function to check if a year is a leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }