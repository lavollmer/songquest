const { User } = require('../models');

const userData = [
  {
    username: 'Gary',
    email: 'gary@gmail.com',
    password: 'garypassword'
  },
  {
    username: 'Ben',
    email: 'ben@gmail.com',
    password: 'benpassword'
  },
  {
    username: 'Katy',
    email: 'katy@gmail.com',
    password: 'katypassword'
  },
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;