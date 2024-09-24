function deepCopy(value) {
    // Handle primitive types
    if (value === null || typeof value !== 'object') {
      return value;
    }
  
    // Handle Date objects
    if (value instanceof Date) {
      return new Date(value.getTime());
    }
  
    // Handle RegExp objects
    if (value instanceof RegExp) {
      return new RegExp(value.source, value.flags);
    }
  
    // Handle Function objects
    if (typeof value === 'function') {
      return value.bind({});
    }
  
    // Handle Array
    if (Array.isArray(value)) {
      return value.map(item => deepCopy(item));
    }
  
    // Handle Object
    if (typeof value === 'object') {
      const copiedObj = {};
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          copiedObj[key] = deepCopy(value[key]);
        }
      }
      return copiedObj;
    }
  }
  