const cutFirst = (str) => {
    if (typeof str === 'string'){
        return str.substring(2)
    }
}
const cutLast = (str) => {
    if (typeof str === 'string'){
       return str.substring(0, (str.length)-2)
    }
}
const cutFirstLast = (str) => {
    if (typeof str === 'string' && str.length > 4) {
        return str.substring(2, str.length - 2);
    }
    return ''; // Return an empty string for strings with length <= 2
};
const keepFirst = (str) => {
    if ( typeof str === 'string'){
        return str.substring(0, 2)
     }
}
const keepLast = (str) => {
    if ( typeof str === 'string'){
        return str.substring((str.length)-2)
     }
}
const keepFirstLast = (str) => {
    if (typeof str === 'string') {
        if (str.length > 4){
            return str.substring(0, 2) + str.substring((str.length)-2);
        }else if (str.length < 4){
            return str
        }
        
    }
    return ''; 
};