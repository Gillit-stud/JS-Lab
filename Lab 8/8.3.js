function contract(fn, ...types) {
  const returnType = types[types.length - 1];
  const argTypes = types.slice(0, -1);
  return function(...args) {
    for (let i = 0; i < args.length; i++) {
      const expectedType = argTypes[i];
      if (args[i] == null || args[i].constructor !== expectedType) {
        throw new TypeError(`Неверный тип аргумента под индексом ${i}. Ожидался ${expectedType.name}`);
      }
    }
    const result = fn(...args);
    if (result == null || result.constructor !== returnType) {
      throw new TypeError(`Неверный тип возвращаемого значения. Ожидался ${returnType.name}`);
    }
    return result;
  };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log(res1); 
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2);
