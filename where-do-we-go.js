import { places } from './where-do-we-go.data.js';

function sortPlaces(places) {
    return places.sort((a, b) => {
        const latA = dmsToDecimal(a.coordinates.split(' ')[0]);
        const latB = dmsToDecimal(b.coordinates.split(' ')[0]);
        return latB - latA; // Sort from north to south
    });
}

function dmsToDecimal(dms) {
    const [degrees, minutes, seconds] = dms.match(/\d+\.?\d*/g).map(Number);
    let decimal = degrees + (minutes / 60) + (seconds / 3600);
    return dms.includes('S') || dms.includes('W') ? -decimal : decimal;
}

function createSections(places) {
    places.forEach(place => {
        const section = document.createElement('section');
        const imageName = place.name.split(',')[0].toLowerCase().replace(/['\s]+/g, '-');
        section.style.background = `url('https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/${imageName}.jpg')`;
        section.style.backgroundSize = 'cover';
        section.style.backgroundPosition = 'center';
        document.body.appendChild(section);
    });
}

function updateLocationInfo(place) {
    const locationElement = document.querySelector('.location');
    locationElement.textContent = `${place.name}\n${place.coordinates}`;
    locationElement.style.color = place.color;
    locationElement.href = `https://www.google.com/maps/place/${encodeURIComponent(place.coordinates)}`;
}

function updateCompass(currentScrollY, lastScrollY) {
    const compass = document.querySelector('.direction');
    compass.textContent = currentScrollY > lastScrollY ? 'S' : 'N';
}

function handleScroll(sortedPlaces) {
    let lastScrollY = window.scrollY;
    return () => {
        const currentScrollY = window.scrollY || window.pageYOffset;
        const currentIndex = Math.round(currentScrollY / window.innerHeight);
        const currentPlace = sortedPlaces[currentIndex];

        if (currentPlace) {
            updateLocationInfo(currentPlace);
            updateCompass(currentScrollY, lastScrollY);
        }

        lastScrollY = currentScrollY;
    };
}

export function explore() {
    const sortedPlaces = sortPlaces(places);
    createSections(sortedPlaces);

    const locationIndicator = document.createElement('a');
    locationIndicator.className = 'location';
    locationIndicator.target = '_blank';
    document.body.appendChild(locationIndicator);

    const compass = document.createElement('div');
    compass.className = 'direction';
    document.body.appendChild(compass);

    const scrollHandler = handleScroll(sortedPlaces);
    window.addEventListener('scroll', scrollHandler);

    // Initial call to set up first location
    scrollHandler();
}