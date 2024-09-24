const first = (arr) => arr['0'];
let arr = [4, 6, 1, 4, 5, 1, 5, 9];
let array = ['world', 'the', 'fuck', 'hello']
console.log(first(arr))
const last = (array) => array[array.length-1];
console.log(last(arr))
const kiss = (arr) => [arr[arr.length -1], arr['0']];
console.log(kiss(array))