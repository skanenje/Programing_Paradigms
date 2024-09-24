const nasa = (N) => {
    // Input validation
    if (!Number.isInteger(N) || N <= 0) {
      throw new Error("Input must be a positive integer.");
    }
  
    // Initialize an empty array to store our results
    const results = [];
  
    // Iterate from 1 to N
    for (let i = 1; i <= N; i++) {
      // Check divisibility and push appropriate string to results
      if (i % 3 === 0 && i % 5 === 0) {
        results.push("NASA");
      } else if (i % 3 === 0) {
        results.push("NA");
      } else if (i % 5 === 0) {
        results.push("SA");
      } else {
        results.push(i.toString());
      }
    }
  
    // Join the results array into a string with space separators
    return results.join(" ");
  };