function letterSpaceNumber(str) {
    // Regular expression breakdown:
  // ([a-zA-Z])  - Capture group 1: Matches any single letter
  // \s          - Matches a single whitespace character
  // (\d)        - Capture group 2: Matches a single digit
  // (?!\d)      - Negative lookahead: Ensures the digit is not followed by another digit
  // (?![a-zA-Z])- Negative lookahead: Ensures the digit is not followed by a letter
  const regex = /([a-zA-Z])\s(\d)(?!\d)(?![a-zA-Z])/g;
    
    // Use match() to find all occurrences and map the results
    const matches = str.match(regex) || [];
    
    return matches;
  }