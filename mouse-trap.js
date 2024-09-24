// Global variables
let lastCircle = null;
let box = null;

export function setBox() {
    box = document.createElement('div');
    box.classList.add('box');
    
    const boxWidth = window.innerWidth * 0.25; // 25vw
    const boxHeight = window.innerHeight * 0.25; // 25vh
    
    box.style.left = `${(window.innerWidth - boxWidth) / 2}px`;
    box.style.top = `${(window.innerHeight - boxHeight) / 2}px`;
    
    document.body.appendChild(box);
}

export function createCircle() {
    document.addEventListener('click', (event) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        circle.style.left = `${event.clientX - 25}px`; // Adjust for circle size (50px / 2)
        circle.style.top = `${event.clientY - 25}px`;
        
        circle.style.background = 'white';
        
        document.body.appendChild(circle);
        lastCircle = circle;
    });
}

export function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        if (lastCircle) {
            const circleRect = lastCircle.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();

            let newX = event.clientX - 25; // Adjust for circle size
            let newY = event.clientY - 25;

            // Check if the circle is inside the box
            if (
                circleRect.left >= boxRect.left &&
                circleRect.right <= boxRect.right &&
                circleRect.top >= boxRect.top &&
                circleRect.bottom <= boxRect.bottom
            ) {
                // Circle is inside the box, keep it trapped
                lastCircle.style.background = 'var(--purple)';
                
                newX = Math.max(boxRect.left, Math.min(newX, boxRect.right - circleRect.width));
                newY = Math.max(boxRect.top, Math.min(newY, boxRect.bottom - circleRect.height));
            } else {
                // Circle is outside the box
                lastCircle.style.background = 'white';
            }

            lastCircle.style.left = `${newX}px`;
            lastCircle.style.top = `${newY}px`;
        }
    });
}