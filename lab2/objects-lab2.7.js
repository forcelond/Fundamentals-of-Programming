'use strict';

const fn = () => {
  const first = { name: 'Ivan' };
  let second = { name: 'Oleg' };

  first.name = 'Max';
  second.name = 'Taras';

  second = { name: 'Anna' };
  console.log(first, second);
};

module.exports = { fn };
