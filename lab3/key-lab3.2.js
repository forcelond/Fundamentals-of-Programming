'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const charIndex = Math.floor(Math.random() * characters.length);
    key += characters[charIndex];
  }
  return key;
};

module.exports = { generateKey };
