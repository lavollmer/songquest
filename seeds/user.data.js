const { User } = require('../models');

const userData = [
  {
    first_name: 'Bob',
    lastName: 'Bobby',
  },
  {
    first_name: 'John',
    lastName: 'Doe',
  },
  {
    first_name: 'Paula',
    lastName: 'Pineapple',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;