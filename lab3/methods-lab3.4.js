'use strict';

const methods = (iface) => {
  const result = [];
  for (const name in iface) {
    const value = iface[name];
    if (typeof value === 'function') {
      result.push([name, value.length]);
    }
  }
  return result;
};

module.exports = { methods };
