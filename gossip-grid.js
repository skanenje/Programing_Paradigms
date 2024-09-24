// Import the gossips array from the data file
import { gossips } from './gossip-grid.data.js';

export function grid() {
  const body = document.body;
  
  const form = createForm();
  body.appendChild(form);
  
  gossips.forEach(gossip => {
    const card = createGossipCard(gossip);
    body.appendChild(card);
  });
  
  const ranges = document.createElement('div');
  ranges.classList.add('ranges');
  
  const widthRange = createRangeInput('width', 200, 800);
  const fontSizeRange = createRangeInput('fontSize', 20, 40);
  const backgroundRange = createRangeInput('background', 20, 75);
  
  ranges.appendChild(widthRange);
  ranges.appendChild(fontSizeRange);
  ranges.appendChild(backgroundRange);
  
  body.appendChild(ranges);
  
  // Add event listeners for range inputs
  widthRange.addEventListener('input', () => updateWidth(widthRange.value));
  fontSizeRange.addEventListener('input', () => updateFontSize(fontSizeRange.value));
  backgroundRange.addEventListener('input', () => updateBackground(backgroundRange.value));

  // Initial update to set default styles
  updateWidth(widthRange.value);
  updateFontSize(fontSizeRange.value);
  updateBackground(backgroundRange.value);

  // Add MutationObserver to watch for changes in range input values
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
        const target = mutation.target;
        if (target.id === 'width') {
          updateWidth(target.value);
        } else if (target.id === 'fontSize') {
          updateFontSize(target.value);
        } else if (target.id === 'background') {
          updateBackground(target.value);
        }
      }
    });
  });

  observer.observe(widthRange, { attributes: true });
  observer.observe(fontSizeRange, { attributes: true });
  observer.observe(backgroundRange, { attributes: true });
}

function createForm() {
  const form = document.createElement('form');
  form.classList.add('gossip');
  
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Got any gossip?';
  
  const button = document.createElement('button');
  button.textContent = 'Share gossip!';
  
  form.appendChild(textarea);
  form.appendChild(button);
  
  form.addEventListener('submit', handleSubmit);
  
  return form;
}

function createGossipCard(text) {
  const card = document.createElement('div');
  card.classList.add('gossip');
  card.textContent = text;
  return card;
}

function createRangeInput(id, min, max) {
  const container = document.createElement('div');
  container.classList.add('range');
  
  const label = document.createElement('label');
  label.htmlFor = id;
  label.textContent = id;
  
  const input = document.createElement('input');
  input.type = 'range';
  input.id = id;
  input.min = min;
  input.max = max;
  
  container.appendChild(label);
  container.appendChild(input);
  
  return input;  // Return just the input element
}

function handleSubmit(event) {
  event.preventDefault();
  const textarea = event.target.querySelector('textarea');
  const newGossip = textarea.value.trim();
  if (newGossip) {
    const card = createGossipCard(newGossip);
    document.body.insertBefore(card, event.target.nextSibling);
    textarea.value = '';
    // Apply current styles to the new card
    updateWidth(document.getElementById('width').value);
    updateFontSize(document.getElementById('fontSize').value);
    updateBackground(document.getElementById('background').value);
  }
}

function updateWidth(value) {
  const width = `${value}px`;
  document.querySelectorAll('.gossip').forEach(card => {
    card.style.width = width;
  });
}

function updateFontSize(value) {
  const fontSize = `${value}px`;
  document.querySelectorAll('.gossip').forEach(card => {
    card.style.fontSize = fontSize;
  });
}

function updateBackground(value) {
  const lightness = `${value}%`;
  document.querySelectorAll('.gossip').forEach(card => {
    card.style.background = `hsl(280, 50%, ${lightness})`;
  });
}