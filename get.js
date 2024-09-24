const get = (src, path) => {
    // Input validation
    if (typeof src !== 'object' || src === null) {
      throw new Error('Source must be an object');
    }
    if (typeof path !== 'string') {
      throw new Error('Path must be a string');
    }
  
    // Split the path into an array of keys
    const keys = path.split('.');
  
    // Start with the source object
    let result = src;
  
    // Traverse the object using the keys
    for (const key of keys) {
      // If the current result is undefined or null, we can't go deeper
      if (result === undefined || result === null) {
        return undefined;
      }
      // Move to the next nested level
      result = result[key];
    }
  
    // Return the final result
    return result;
  };
  