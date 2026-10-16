'use strict';

const phonebook = [
  { name: 'Ivan', phone: '+380501234567' },
  { name: 'Oleg', phone: '+380671234567' },
  { name: 'Anna', phone: '+380931234567' },
];

const findPhoneByName = (name) => {
  for (const p of phonebook) {
    if (p.name === name) return p.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
