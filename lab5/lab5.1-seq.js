function seq(...args) {
  const last = args[args.length - 1];

  if (typeof last === 'number') {
    let result = last;
    for (let i = args.length - 2; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  }

  return function (...next) {
    return seq(...args, ...next);
  };
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
