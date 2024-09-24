function compose(event) {
    if (/^[a-z]$/.test(event.key)) {
        // Create a new note for lowercase letters
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = event.key;
        note.style.backgroundColor = generateColor(event.key);
        document.body.appendChild(note);
    } else if (event.key === 'Backspace') {
        // Remove the last note
        const notes = document.getElementsByClassName('note');
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    } else if (event.key === 'Escape') {
        // Clear all notes
        const notes = document.getElementsByClassName('note');
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}

function generateColor(key) {
    const hue = (key.charCodeAt(0) - 97) * (360 / 26);
    return `hsl(${hue}, 100%, 50%)`;
}

document.addEventListener('keydown', compose);

// Export the compose function
export { compose };