'use strict';

const phonebook = {
  Ivan: '+380501234567',
  Oleg: '+380671234567',
  Anna: '+380931234567',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
