// Helper function to extract URLs based on a given regex
function extractURLs(dataSet, regex) {
    return dataSet.match(regex) || [];
  }
  
  // Function to get all URLs
  function getURL(dataSet) {
    const urlRegex = /https?:\/\/\S+/g;
    return extractURLs(dataSet, urlRegex);
  }
  
  // Function to get URLs with at least 3 query parameters
  function greedyQuery(dataSet) {
    const greedyRegex = /https?:\/\/\S+\?\S+(?:&\S+){2,}/g;
    return extractURLs(dataSet, greedyRegex);
  }
  
  // Function to get URLs with exactly 2 or 3 query parameters
  function notSoGreedy(dataSet) {
    const notSoGreedyRegex = /https?:\/\/[^\s?]+\?([^&\s]+=[^&\s]+)&([^&\s]+=[^&\s]+)(&([^&\s]+=[^&\s]+))?(?!&)/g;
    return extractURLs(dataSet, notSoGreedyRegex);
  }