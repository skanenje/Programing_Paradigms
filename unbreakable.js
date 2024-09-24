const split = (str, subStr) => {
  if (subStr === '') return [...str];
  
  let result = [];
  let lastIndex = 0;
  let index = str.indexOf(subStr);

  while (index !== -1) {
      result.push(str.slice(lastIndex, index));
      lastIndex = index + subStr.length;
      index = str.indexOf(subStr, lastIndex);
  }

  result.push(str.slice(lastIndex));
  return result;
};
const join = (arr, joinBy) => {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (i < arr.length - 1) {
      res += joinBy;
    }
  }
  return res;
}
console.log(split('ggg - ddd - b', ' '))