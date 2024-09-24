const invert = (obj) => {
    let newObj = {};
    for (let [key, value] of Object.entries(obj)){
        newObj[value] = key;
    }
    return newObj
}