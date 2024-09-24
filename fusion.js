function fusion(obj1, obj2) {
    const result = {};
  
    // Get all unique keys from both objects
    const allKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
  
    for (const key of allKeys) {
      // If key doesn't exist in obj2, use obj1's value
      if (!(key in obj2)) {
        result[key] = obj1[key];
        continue;
      }
  
      // If key doesn't exist in obj1, use obj2's value
      if (!(key in obj1)) {
        result[key] = obj2[key];
        continue;
      }
  
      // Both objects have the key, merge based on type
      const val1 = obj1[key];
      const val2 = obj2[key];
  
      if (Array.isArray(val1) && Array.isArray(val2)) {
        // Concatenate arrays
        result[key] = [...val1, ...val2];
      } else if (typeof val1 === 'string' && typeof val2 === 'string') {
        // Concatenate strings with a space
        result[key] = val1 + ' ' + val2;
      } else if (typeof val1 === 'number' && typeof val2 === 'number') {
        // Add numbers
        result[key] = val1 + val2;
      } else if (typeof val1 === 'object' && typeof val2 === 'object' && !Array.isArray(val1) && !Array.isArray(val2)) {
        // Recursively merge objects
        result[key] = fusion(val1, val2);
      } else {
        // Type mismatch, use obj2's value
        result[key] = val2;
      }
    }
  
    return result;
  }