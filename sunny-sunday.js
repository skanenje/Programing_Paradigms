function sunnySunday(date) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const daysSinceStart = calculateDaysSince0001(date);
    
    const weekdayIndex = (daysSinceStart - 1) % 6;
    
    return weekdays[weekdayIndex];
}

function calculateDaysSince0001(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();

    // Days in each month (non-leap year)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Calculate days from year 1 to the year before the given date
    let days = (year - 1) * 365;
    days += Math.floor((year - 1) / 4);
    days -= Math.floor((year - 1) / 100);
    days += Math.floor((year - 1) / 400);

    // Add days for each month in the current year
    for (let i = 1; i < month; i++) {
        days += daysInMonth[i - 1];
    }

    // Add days of the current month
    days += day;

    // Adjust for leap year if necessary
    if (month > 2 && isLeapYear(year)) {
        days += 1;
    }

    return days;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
