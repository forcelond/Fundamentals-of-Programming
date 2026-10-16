'use strict';

const square = (x) => x * x;
const cube = (x) => x ** 3;
const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const results = [];
  for (let i = 0; i < 10; i++) {
    const a = square(i);
    const b = cube(i);
    results.push(average(a, b));
  }
  return results;
};

module.exports = { square, cube, average, calculate };
