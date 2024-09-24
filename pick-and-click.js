export function pick() {
    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    document.body.appendChild(svg);

    // Create X and Y axis lines
    const axisX = createAxis('axisX');
    const axisY = createAxis('axisY');
    svg.appendChild(axisX);
    svg.appendChild(axisY);

    // Create display elements
    const hslDisplay = createDisplayElement('hsl', 'HSL: ');
    const hueDisplay = createDisplayElement('hue text', 'Hue: ');
    const luminosityDisplay = createDisplayElement('luminosity text', 'Luminosity: ');

    // Add mousemove event listener
    document.addEventListener('mousemove', (event) => {
        const hue = Math.round((event.clientX / window.innerWidth) * 360);
        const luminosity = Math.round((1 - event.clientY / window.innerHeight) * 100);

        // Update background color
        document.body.style.background = `hsl(${hue}, 50%, ${luminosity}%)`;

        // Update displays
        hslDisplay.textContent = `hsl(${hue}, 50%, ${luminosity}%)`;
        hueDisplay.textContent = `Hue: ${hue}`;
        luminosityDisplay.textContent = `Luminosity: ${luminosity}`;

        // Update axis lines
        updateAxis(axisX, event.clientX, 'x');
        updateAxis(axisY, event.clientY, 'y');
    });

    // Add click event listener for copying to clipboard
    document.addEventListener('click', () => {
        const hslValue = hslDisplay.textContent;
        navigator.clipboard.writeText(hslValue).then(() => {
            console.log('HSL value copied to clipboard');
        });
    });
}

function createAxis(id) {
    const axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    axis.setAttribute('id', id);
    axis.setAttribute('stroke', 'black');
    return axis;
}

function updateAxis(axis, value, direction) {
    if (direction === 'x') {
        axis.setAttribute('x1', value);
        axis.setAttribute('x2', value);
        axis.setAttribute('y1', 0);
        axis.setAttribute('y2', '100%');
    } else {
        axis.setAttribute('x1', 0);
        axis.setAttribute('x2', '100%');
        axis.setAttribute('y1', value);
        axis.setAttribute('y2', value);
    }
}

function createDisplayElement(className, initialText) {
    const element = document.createElement('div');
    element.className = className;
    element.textContent = initialText;
    document.body.appendChild(element);
    return element;
}