// verydisco.mjs

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
  const main = () => {
    const input = process.argv[2];
    
    if (input === undefined) {
      console.error("Please provide an argument");
      process.exit(1);
    }
  
    const result = processInput(input);
    console.log(result);
  };
  
  // Run the main function
  main();