const composeSafe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Arguments must be functions');
    }
  }
  const handlers = {
    error: []
  };
  const composedFn = (initialValue) => {
    let result = initialValue;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (err) {
        handlers.error.forEach(handler => handler(err));
        return undefined; 
      }
    }
    return result;
  };
  composedFn.on = (eventName, handler) => {
    if (eventName === 'error' && typeof handler === 'function') {
      handlers.error.push(handler);
    }
  };
  return composedFn;
};
const add5 = x => x + 5;
const throwsErrorFn = x => {
  if (x > 10) throw new Error("Значення занадто велике!");
  return x * 2;
};
const subtract2 = x => x - 2;
const safeF = composeSafe(subtract2, throwsErrorFn, add5);
safeF.on('error', e => {
  console.log('Спіймана помилка під час виконання композиції:', e.message);
});
console.log("Результат (без помилки):", safeF(3));
// Випадок з помилкою
console.log("Результат (з помилкою):", safeF(7));
// add5(7) = 12 -> throwsErrorFn(12) викидає помилку -> виконання зупиняється, повертається undefined
