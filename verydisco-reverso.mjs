// verydisco-reverso.mjs

import { readFile } from 'fs/promises';

// Function to reverse the "very disco" transformation on a single word
const undoVeryDisco = (word) => {
  const midpoint = Math.floor(word.length / 2);
  const secondHalf = word.slice(0, midpoint);
  const firstHalf = word.slice(midpoint);
  return firstHalf + secondHalf;
};

// Function to process the entire input string
const processInput = (input) => {
  return input.split(' ').map(undoVeryDisco).join(' ');
};

// Main function
const main = async () => {
  const filename = process.argv[2];
  
  if (!filename) {
    console.error("Please provide a filename as an argument");
    process.exit(1);
  }

  try {
    const content = await readFile(filename, 'utf-8');
    const result = processInput(content.trim());
    console.log(result);
  } catch (error) {
    console.error("Error reading or processing file:", error.message);
    process.exit(1);
  }
};

// Run the main function
main().catch(console.error);