function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if (value && typeof value === "object") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }
  
const escapeStr = '\` \\ \/ \" \'';
const arr = [4, '2'];
const obj = {
    str: 'Hello World', 
    num: 420,
    bool: false,
    undef: undefined
};
const nested = {
    arr: [4, undefined, '2'],
    obj: {
    str: 'Hello Heaven', 
    num: 421,
    bool: false,
    }
};
Object.freeze(arr);
Object.freeze(obj);
deepFreeze(nested);
