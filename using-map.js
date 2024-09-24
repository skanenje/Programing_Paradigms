const citiesOnly = (arr) => {
  if (!Array.isArray(arr)){
      throw new Error('object not an array')
  }
 return arr.map(item => item.city)
}
const upperCasingStates = (arr) => {
  if (!Array.isArray(arr)){
      throw new Error('object not an array')
  }
  return arr.map(item => caserOne(item));
}
const caserOne = (str) => {
  let arr = str.split(' ');
  let arr2 = [];
  if (arr.length >= 1){
    arr2 = arr.map(item => customCaser(item))
  }
  return arr2.join(' ')
}
const fahrenheitToCelsius = (arr) => arr.map(item => converter(item));
const converter = (tempStr) => {
  const match = tempStr.match(/-?\d+(\.\d+)?/);
  const value = match ? parseFloat(match[0]) : NaN;
  const result = farenToCelci(value);
  return `${Math.floor(result)}°C`
}
const converter1 = (tempStr) => {
  const match = tempStr.match(/-?\d+(\.\d+)?/);
  const value = match ? parseFloat(match[0]) : NaN;
  const result = farenToCelci(value);
  return `${Math.floor(result)}°Celsius`

}
const farenToCelci = (val) => {
  return (val - 32) * 5/9;
}
const trimTemp = (arr) => arr.map(item => objMani(item));
const objMani = (obj) => {
  let copy = {...obj};
  copy.temperature = copy.temperature.replace(/\s+/g, '');
  return copy;
}
const tempForecasts = (arr) => arr.map(item => format(item));
const format = (obj) => {
  const object1 = prepareObj(obj);
  return `${object1.temperature} in ${object1.city}, ${object1.state}`
}
const prepareObj = (obj) => {
  let copy1 = {...obj}
  copy1.temperature = converter1(customtrim(copy1.temperature))
  copy1.state = customCaser(copy1.state)
  return copy1
}
const customCaser = (str) => {
  return str.split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
}
const customtrim = (str) => str.trim();
