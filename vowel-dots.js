// Define the regular expression for vowels
const vowels = /[aeiou]/gi;

function vowelDots(str) {
  // Use replace method with a callback function
  return str.replace(vowels, match => match + '.');
}