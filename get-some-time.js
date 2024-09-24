function firstDayWeek(week, year) {
    let time = new Date(year);
    if (week === 1) {
        time.setHours(24);
        return formattedDate(time);
    }
    
    let dayPlus = week * 7 * 24;
    time.setHours(dayPlus - 123);
    
    for (let i = 0; i < 7; i++) {
        if (getWeekDay(time) === 'Monday') {
            return formattedDate(time);
        }
        time.setHours(-24);
    }
    return time;
}

function getWeekDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay() - 1];
}

function formattedDate(d) {
    let month = String(d.getMonth() + 1).padStart(2, '0');
    let day = String(d.getDate() - 1).padStart(2, '0');
    let year = String(d.getFullYear()).padStart(4, '0');
    return `${day}-${month}-${year}`;
}

console.log(firstDayWeek(1, '1000')); // Expected output: 01-01-1000
console.log(firstDayWeek(52, '1000')); // Expected output: 22-12-1000
console.log(firstDayWeek(2, '0001')); // Expected output: 08-01-0001