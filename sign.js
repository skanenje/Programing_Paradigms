let n = 5;
let b = -19;
const sign = (n) => {
    if (n > 0) {
        return 1
       }else if (n < 0){
        return -1
       }else if (n === 0){
        return 0
       }else {
        return NaN
       }
}
const sameSign = (a, b) => {
    if ((sign(a)) === (sign(b))){
        return true
    }else{
        return false
    }
}
console.log(sign(n))
console.log(sameSign(n, b))