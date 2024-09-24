const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
];
function addWeek(date) {
    // Get the epoch date (0001-01-01)
    const epoch = new Date('0001-01-01');

    // Calculate the difference in days between the input date and the epoch
    const timeDiff = date.getTime() - epoch.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Handle cases where the date is the same as the epoch
    if (dayDiff === 0) {
        return daysOfWeek[0]; // Return "Monday"
    }

    // Determine the weekday index in our 14-day week system
    const weekIndex = dayDiff % 14;

    // Return the corresponding weekday name
    return daysOfWeek[weekIndex];
}
function timeTravel({ date, hour = 0, minute = 0, second = 0 }) {
    // Create a new Date object to avoid mutating the original date
    const newDate = new Date(date);

    // Directly set the specified hour, minute, and second values
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);

    // Return the new Date object
    return newDate;
}
