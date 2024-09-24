
const get = (key) => sourceObject[String(key)];
let key = 'bool';
console.log(get(key))

const set = (key1, value) => sourceObject[key1] = value;
let key1 = 'Id';
let value = 420;
set(key1, value);
console.log(sourceObject)
