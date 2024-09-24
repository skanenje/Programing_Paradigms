const reverse = (arr) => {
  let res = '';
    let array1 = [];
  if (typeof arr === 'object'){
    for (let i = arr.length-1 ; i >= 0 ; i--){
      array1.push(arr[i]);
    }
    return array1
  }else if (typeof arr === 'string'){
    for (let char of arr){
      array1.push(char);
    }
    for (let i = array1.length-1 ; i >= 0 ; i--){
      res+=array1[i]
    }
    return res
  }
  
}
const arr = 'hello'
console.log(reverse(arr))