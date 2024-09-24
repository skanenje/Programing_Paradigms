function replica(target, ...sources) {
    // Helper function to determine if a value is a plain object
    function isPlainObject(val) {
      return typeof val === 'object' && val !== null && val.constructor === Object;
    }
  
    // Helper function to perform deep copy
    function deepCopy(value) {
      if (Array.isArray(value)) {
        return value.map(deepCopy);
      }
      if (isPlainObject(value)) {
        return Object.keys(value).reduce((acc, key) => {
          acc[key] = deepCopy(value[key]);
          return acc;
        }, {});
      }
      if (value instanceof Date) {
        return new Date(value.getTime());
      }
      if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags);
      }
      return value; // primitives and functions are assigned as-is
    }
  
    // Iterate through all source objects
    for (const source of sources) {
      if (source == null) continue; // Skip null and undefined sources
  
      // Iterate through all properties of the source object
      Object.keys(source).forEach(key => {
        const sourceValue = source[key];
        
        if (isPlainObject(sourceValue)) {
          // If the property is an object, recursively apply replica
          if (!isPlainObject(target[key])) {
            target[key] = {};
          }
          replica(target[key], sourceValue);
        } else {
          // For non-objects, perform a deep copy
          target[key] = deepCopy(sourceValue);
        }
      });
    }
  
    return target;
  }
  