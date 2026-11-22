function seq(...funcs) {
  return function(...args) {
    const arg = args[0];
    if (typeof arg === 'number') {
      return funcs.reduceRight((acc, fn) => fn(acc), arg);
    }
    return seq(...funcs, ...args);
  };
}
console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
);
console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
);
console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
);
