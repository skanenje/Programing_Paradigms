function flow(funcs) {
    // Check if funcs is an array and not empty
    if (!Array.isArray(funcs) || funcs.length === 0) {
      throw new Error('flow requires an array of at least one function');
    }
  
    // Return a new function that will apply all functions in sequence
    return function(...args) {
      // Start with the result of applying the first function to the arguments
      let result = funcs[0].apply(this, args);
  
      // Apply each subsequent function to the result of the previous one
      for (let i = 1; i < funcs.length; i++) {
        result = funcs[i].call(this, result);
      }
  
      return result;
    };
}