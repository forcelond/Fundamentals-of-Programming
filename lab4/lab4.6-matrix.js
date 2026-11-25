function max(matrix) {
  let largest = -Infinity;
  for (const row of matrix) {
    for (const number of row) {
      if (number > largest) {
        largest = number;
      }
    }
  }
  return largest;
}

const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(m);
