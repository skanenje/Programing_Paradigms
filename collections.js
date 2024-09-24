const arrToSet = (arr) => {
    let mySet = new Set();
    for (const value of arr.values()){
        mySet.add(value);
    }
    return mySet
}
const arrToStr = (arr) => {
    let result = '';
    for (const value of arr.values()){
        result+=value;
    }
    return result
}

const setToArr = (set) => {
    let array = [];
    for (const value of set.keys()){
        array.push(value)
    }
    return array
}
const setToStr = (set) => {
    let res = '';
    for (const value of set.keys()){
        res+=value;
    }
    return res
}
const strToArr = (str) => {
    let arr = [];
    for (const char of str){
        arr.push(char);
    }
    return arr
}
const strToSet = (str) => {
    let set = new Set();
    for (const char of str){
        set.add(char);
    }
    return set
}
const mapToObj = (map) => {
    let obj1 = new Object();
    for (let [key, value] of map){
        obj1[`${key}`] = value
    }
    return obj1

}
const objToArr= (obj) => {
   const arr = Object.values(obj);
   return arr
}
const objToMap = (obj) => {
    const map1 = new Map();
    for (const [key, value] of Object.entries(obj)){
        map1.set(`${key}`, value)
    }
    return map1
}
const arrToObj = (arr) => {
    const obj1 = new Object();
    for ( const [key, value] of arr.entries()){
        obj1[`${key}`] = value
    }
    return obj1
}
const strToObj = (str) => {
    const obj = new Object();
    for (let index in str){
        obj[`${index}`] = str[index]
    }
    return obj
}
function superTypeOf(value) {
    if (value === null) {
        return 'null'; // Handle null
    }
    
    if (Array.isArray(value)) {
        return 'array'; // Handle arrays
    }

    if (value instanceof Map) {
        return 'Map'; // Return 'Map' with uppercase 'M'
    }

    if (value instanceof Set) {
        return 'Set'; // Return 'Set' with uppercase 'S'
    }

    return typeof value; // Default behavior for other types
}