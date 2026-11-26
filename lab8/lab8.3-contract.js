function hasType(value, type) {
  if (value === null || value === undefined) {
    return false;
  }
  if (typeof value === 'object' || typeof value === 'function') {
    return value instanceof type;
  }
  return value.constructor === type;
}

function contract(fn, ...types) {
  if (typeof fn !== 'function' || types.length === 0) {
    throw new TypeError('Передайте функцію та тип результату');
  }
  const resultType = types.pop();

  return function (...args) {
    if (args.length !== types.length) {
      throw new TypeError('Неправильна кількість аргументів');
    }
    for (let i = 0; i < args.length; i++) {
      if (!hasType(args[i], types[i])) {
        throw new TypeError('Неправильний тип аргументу ' + (i + 1));
      }
    }

    const result = fn.apply(this, args);
    if (!hasType(result, resultType)) {
      throw new TypeError('Неправильний тип результату');
    }
    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));
