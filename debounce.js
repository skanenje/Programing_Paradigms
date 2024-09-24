function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function opDebounce(func, delay, options = {}) {
  let timer;
  let lastInvokeTime = 0;

  return function (...args) {
    const currentTime = Date.now();
    const shouldInvoke = options.leading && (currentTime - lastInvokeTime > delay);

    clearTimeout(timer);

    if (shouldInvoke) {
      lastInvokeTime = currentTime;
      func.apply(this, args);
    } else {
      timer = setTimeout(() => {
        lastInvokeTime = Date.now();
        func.apply(this, args);
      }, delay);
    }
  };
}
