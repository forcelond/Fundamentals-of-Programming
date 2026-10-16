'use strict';

const array = [
    true, 'hello', 5, 12, -200,
    false, 'word', null, NaN,
    { name: 'Ben' }, [1, 2, 3],
    undefined, 'Egypt', 10, false,
    null, 3.5
];

const hash = {};

for (const item of array) {
    const type = typeof item;

    if (hash[type] === undefined) {
        hash[type] = 0;
    }

    hash[type]++;
}

console.log(hash);