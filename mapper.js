const map = (arr, func) => {
    let result = [];
    for (let i = 0 ; i < arr.length ; i++){
        result.push(func(arr[i], i, arr));
    }
    return result;
}
const flatMap = (arr, func) => {
    return arr.reduce((acc, current, index, array) => {
        const result = func(current, index, array);
        if (Array.isArray(result)) {
            return acc.concat(result);
        } else {
            acc.push(result);
            return acc;
        }
    }, []);
};

// const add = (a) => a+10;
// const arr = [1, 2, 3, 4, 5];
// console.log(map(arr, add))