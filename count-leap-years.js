function countLeapYears(input) {
    let year;
  
    // Handle Date object input
    if (input instanceof Date) {
      year = input.getFullYear();
    } 
    // Handle number input
    else if (typeof input === 'number') {
      year = Math.floor(input);
    } 
    else {
      throw new Error("Input must be a Date object or a number");
    }
  
    // Validate input
    if (year < 1) {
      throw new Error("Year must be 1 or greater");
    }
  
    // Subtract 1 from the year because we're counting elapsed leap years
    year -= 1;
  
    // Calculate leap years
    return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  }