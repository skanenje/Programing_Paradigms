const pick = (obj, arg) => {
    let keys;
    if (Array.isArray(arg)) {
      keys = Object.keys(obj).filter(key => arg.includes(key));
    } else {
      keys = Object.keys(obj).filter(key => key === arg);
    }
  
    return keys.reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {});
  };
  const omit = (obj, arg) => {
    const target = {};
    for (const key of Object.keys(obj)) {
        if (Array.isArray(arg) && !arg.includes(key)) {
            target[key] = obj[key];
        } else if (typeof arg === 'string' && key !== arg) {
            target[key] = obj[key];
        }
    }
    return target;
};
  