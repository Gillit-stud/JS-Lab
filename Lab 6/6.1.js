const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments to pipe must be functions');
    }
  }
  return (initialValue) => {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f1 = pipe(inc, twice, cube);
console.log(f1(5)); 
const f2 = pipe(inc, inc);
console.log(f2(7)); 
try {
  const f3 = pipe(inc, 7, cube);
} catch (e) {
  console.error("Помилка спіймана:", e.message);
}
