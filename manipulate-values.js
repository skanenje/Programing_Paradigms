function filterValues(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback(value))
    );
  }
  
  // Map values of an object using a callback function
  function mapValues(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, callback(value)])
    );
  }
  
  // Reduce values of an object using a callback function
  function reduceValues(obj, callback, initialValue) {
    const values = Object.values(obj);
    return initialValue !== undefined
      ? values.reduce(callback, initialValue)
      : values.reduce(callback);
  }         
  