const indexOf = (arr, ...arg) => {
    const search = arg[0];
    
    if (arg[1] !== undefined) {
        const start = arg[1];
        for (let index = start; index < arr.length; index++) {
            if (arr[index] === search) {
                return index;
            }
        }
    } else {
        for (let [key, value] of arr.entries()) {
            if (value === search) {
                return key;
            }
        }
    }
    
    return -1; // Return -1 if the element is not found
}
const lastIndexOf = (arr, ...arg) => {
    const search = arg[0];
    let start = arg[1] !== undefined ? arg[1] : arr.length - 1;

    // Ensure the start index is within bounds
    if (start >= arr.length) {
        start = arr.length - 1;
    }

    for (let i = start; i >= 0; i--) {
        if (arr[i] === search) {
            return i;
        }
    }

    return -1; // Return -1 if the element is not found
}
const includes = (arr, value) => {
    for (const val of arr) { // You can use 'arr' directly instead of 'arr.values()'
        if (val === value) {
            return true;
        }
    }
    return false; // Return false if the value is not found
}
