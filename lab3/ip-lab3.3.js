'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);
  return bytes.reduce((total, byte) => (total << 8) | byte, 0);
};

module.exports = { ipToInt };
