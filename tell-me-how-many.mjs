// Import required modules
import { readdir } from 'fs/promises';  // Asynchronous file system module for reading directories
import { resolve } from 'path';  // Helps to resolve paths, converting them to absolute paths

// Function to process guest names from the filename
const processGuestName = (filename) => {
  // Remove '.json' extension using slice and split filename into [FirstName, LastName]
  const nameParts = filename.slice(0, -5).split('_');  
  return [nameParts[0], nameParts[1]];  // Return the names in [FirstName, LastName] format
};

// Function to sort guests alphabetically by last name, then by first name
const sortGuests = (guests) => {
  return guests.sort((a, b) => {
    const lastNameComparison = a[1].localeCompare(b[1]);  // Compare last names
    // If last names are identical, compare first names
    return lastNameComparison !== 0 ? lastNameComparison : a[0].localeCompare(b[0]);
  });
};

// Function to format the guest list for output
const formatGuestList = (guests) => {
  // Map each guest to a formatted string "Number. Lastname Firstname"
  return guests.map((guest, index) => {
    return `${index + 1}. ${guest[1]} ${guest[0]}`;  // Output as "1. LastName FirstName"
  }).join('\n');  // Join the array of strings into a single string with new lines
};

// Main function that handles the entire process
const main = async () => {
  // Get the directory path from the command line arguments or default to current directory
  const dirPath = process.argv[2] ? resolve(process.argv[2]) : process.cwd();

  try {
    // Read the contents of the directory asynchronously
    const files = await readdir(dirPath);

    // Filter for files that end with '.json' and process each filename to get guest names
    const guestNames = files
      .filter(file => file.endsWith('.json'))  // Only process .json files
      .map(processGuestName);  // Extract guest names from filenames

    // Sort the guests alphabetically by last name, then first name
    const sortedGuests = sortGuests(guestNames);

    // Format the sorted guest list for output
    const formattedList = formatGuestList(sortedGuests);
    
    // Output the formatted guest list to the console
    console.log(formattedList);

  } catch (error) {
    // Handle any errors that occur during file reading or processing
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Exit with an error code
  }
};

// Run the main function and handle any unhandled errors
main().catch(error => {
  console.error(`Unhandled error: ${error.message}`);
  process.exit(1);
});
