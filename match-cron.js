function matchCron(cronString, date) {
    // Split the cron string into components
    const cronComponents = cronString.split(' ');

    // Extract date components
    const dateComponents = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,  // JavaScript months are 0-indexed
        date.getDay() === 0 ? 7 : date.getDay()  // Convert Sunday (0) to 7
    ];

    // Compare each component
    for (let i = 0; i < 5; i++) {
        if (cronComponents[i] !== '*' && parseInt(cronComponents[i]) !== dateComponents[i]) {
            return false;
        }
    }

    return true;
}