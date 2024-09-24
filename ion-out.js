function ionOut(str) {
    // Regular expression to match words with 'tion'
    // \b: word boundary
    // \w+: one or more word characters
    // t: literal 't'
    // ion\b: 'ion' followed by a word boundary
    const regex = /\b(\w+t)ion\b/g;
    
    // Use match to find all occurrences, then map to remove 'ion'
    const matches = str.match(regex) || [];
    
    // Map the matches to remove 'ion' from the end
    return matches.map(word => word.slice(0, -3));
  }
  