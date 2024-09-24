is.num = (n) => typeof n === 'number';  
is.nan = (n) => {
    if (typeof n === 'number'){
        return Number.isNaN(n);
    }
}
is.str = (n) => typeof n === 'string';
is.bool = (n) => typeof n === 'boolean';
is.undef = (n) => typeof n === 'undefined';
is.def = (n) => typeof n !== 'undefined';
is.arr = (n) => {
    if (typeof n === 'object'){
        return Array.isArray(n);
    }
}
is.obj = (n) => n !== null && typeof n === 'object' && !Array.isArray(n);
is.fun = (n) => typeof n === 'function';
is.truthy = (n) => !!n;
is.falsy = (n) => !n;