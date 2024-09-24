
import { writeFile } from 'fs/promises';

// Function to make a word "very disco"
const makeVeryDisco = (word) => {
  const midpoint = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, midpoint);
  const secondHalf = word.slice(midpoint);
  return secondHalf + firstHalf;
};

// Function to process the entire input string
const processInput = (input) => {
  return input.split(' ').map(makeVeryDisco).join(' ');
};

// Main function
const main = async () => {
  const input = process.argv[2];
  
  if (input === undefined) {
    console.error("Please provide an argument");
    process.exit(1);
  }

  const result = processInput(input);
  
  try {
    await writeFile('verydisco-forever.txt', result);
    console.log('Result written to verydisco-forever.txt');
  } catch (error) {
    console.error('Error writing to file:', error);
    process.exit(1);
  }
};

// Run the main function
main().catch(console.error);