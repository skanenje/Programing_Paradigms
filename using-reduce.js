const adder = (arr, initVal = 0) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, initVal);

const sumOrMul = (arr1, initval1) => {
  const hasInitialValue = initval1 !== undefined;
  return arr1.reduce((accumulator, currentValue, index) => {
    if (!hasInitialValue && index === 0) return currentValue;
    return currentValue % 2 === 0 ? callBackMul(accumulator, currentValue) : callBackAdd(accumulator, currentValue);
  }, hasInitialValue ? initval1 : undefined);
};

const callBackAdd = (acc, init) => acc + init;
const callBackMul = (acc, init) => acc * init;

const funcExec = (arr, initVal) => arr.reduce((acc, currentFunc) => currentFunc(acc), initVal);
