import { colors } from './fifty-shades-of-cold.data.js';

function generateClasses() {
    const style = document.createElement('style');
    const cssRules = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
    style.textContent = cssRules;
    document.head.appendChild(style);
}

function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    const coldShades = colors.filter(color => 
        coldColors.some(coldColor => color.includes(coldColor))
    );
    coldShades.forEach(color => {
        const div = document.createElement('div');
        div.className = color;
        div.textContent = color;
        document.body.appendChild(div);
    });
}

function choseShade(shade) {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        // Remove all color classes
        div.className = '';
        // Add the new shade class
        div.classList.add(shade);
    });
}

export { generateClasses, generateColdShades, choseShade };