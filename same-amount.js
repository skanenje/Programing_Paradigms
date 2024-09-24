function sameAmount(str, regex1, regex2) {
    // Ensure both regexes have the global flag
    const r1 = new RegExp(regex1, regex1.flags.includes('g') ? regex1.flags : regex1.flags + 'g');
    const r2 = new RegExp(regex2, regex2.flags.includes('g') ? regex2.flags : regex2.flags + 'g');
    
    // Count matches for each regex
    const count1 = (str.match(r1) || []).length;
    const count2 = (str.match(r2) || []).length;
    
    // Return true if the counts are the same, false otherwise
    return count1 === count2;
  }