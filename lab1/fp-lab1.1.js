'use strict';

function inc(n) {
    n++;
    return n;
}

const a = 5;
const b = inc(a);

console.log({ a, b });