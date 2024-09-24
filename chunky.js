const chunk = (array, size) => {
    // Check if the input is valid
    if (!Array.isArray(array) || !Number.isInteger(size) || size <= 0) {
      throw new Error("Invalid input. Array must be an array and size must be a positive integer.");
    }
  
    // Initialize the result array
    const result = [];
  
    // Iterate through the input array
    for (let i = 0; i < array.length; i += size) {
      // Slice a chunk of the specified size from the array
      const chunk = array.slice(i, i + size);
      
      // Add the chunk to the result array
      result.push(chunk);
    }
  
    // Return the array of chunks
    return result;
  };