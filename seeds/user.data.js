const { User } = require('../models');

const userData = [
  {
    username: 'Bobby123',
    email: 'Bobby@gmail.com',
    password: '1234asdlfkj'
  },
  {
    username: 'John123',
    email: 'John@gmail.com',
    password: '12asdf'
  },
  {
    username: 'Lisa',
    email: 'Lisa@gmail.com',
    password: '870asdf'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;