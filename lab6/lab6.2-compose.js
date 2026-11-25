function compose(...fns) {
  const listeners = [];

  function f(x) {
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        const fn = fns[i];
        x = fn(x);
      }
      return x;
    } catch (error) {
      for (const listener of listeners) {
        listener(error);
      }
      return undefined;
    }
  }

  f.on = function (event, listener) {
    if (event === 'error') {
      listeners.push(listener);
    }
  };

  return f;
}

function squareRoot(x) {
  if (x < 0) {
    throw new Error('Число під коренем має бути невід’ємним');
  }
  return Math.sqrt(x);
}

const f = compose(x => x + 1, squareRoot);
f.on('error', error => console.log(error.message));

console.log(f(9));
console.log(f(-1));
