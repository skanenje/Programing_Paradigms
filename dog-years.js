const dogYears = (planet, ageSeconds) => {
    const secondsPerYear = 31557600;
    let age = 0;
    switch (planet) {
        case 'earth':
            age = (ageSeconds / secondsPerYear) * 7;
            return parseFloat(age.toFixed(2));
        case 'mercury':
            age = (ageSeconds / (secondsPerYear * 0.2408467)) * 7;
            return parseFloat(age.toFixed(2))
        case 'venus' :
            age = (ageSeconds / (secondsPerYear * 0.61519726)) * 7;
            return parseFloat(age.toFixed(2))
        case 'mars':
            age = (ageSeconds / (secondsPerYear * 1.8808158)) * 7;
            return parseFloat(age.toFixed(2))
        case 'jupiter':
            age = (ageSeconds / (secondsPerYear * 11.862615)) * 7;
            return parseFloat(age.toFixed(2))
        case 'saturn':
            age = (ageSeconds / (secondsPerYear * 29.447498)) * 7;
            return parseFloat(age.toFixed(2))
        case 'uranus':
            age = (ageSeconds / (secondsPerYear * 84.016846)) * 7;
            return parseFloat(age.toFixed(2))
        case 'neptune':
            age = (ageSeconds / (secondsPerYear *164.79132)) * 7;
            return parseFloat(age.toFixed(2))
    }
}
const planets = ['earth', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
for (const planet of planets){
    console.log(dogYears(planet, 1000000000))
}