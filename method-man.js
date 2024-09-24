const str = 'hello World'
const words = (str) => str.split(' ');
const fruits = ['apple', 'cherry', 'oranges', 'banana'];
const sentence = (arr) => arr.join(' ');
console.log(sentence(fruits))
const yell = (str) => str.toUpperCase();
console.log(yell(str))
const whisper = (str) =>'*'+str.toLowerCase()+'*';
console.log(whisper(str))
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize(str))