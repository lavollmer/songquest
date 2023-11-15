const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'Gary',
    email: 'gary@gmail.com',
    password: 'garypassword'
  },
  {
    id: 2,
    username: 'Ben',
    email: 'ben@gmail.com',
    password: 'benpassword'
  },
  {
    id:3,
    username: 'Katy',
    email: 'katy@gmail.com',
    password: 'katypassword'
  },
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;