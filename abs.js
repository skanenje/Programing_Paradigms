const n = -5;
const isPositive = (n) => n > 0;
console.log(isPositive(n))
const abs = (n) => {
    if (n === -0){
        return 0
    }else if (n < 0){
        return n = -n
    }
    return n
}
console.log(abs(n))