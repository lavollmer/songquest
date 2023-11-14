// import the other seed files and run them as a function (bulk create)

const sequelize = require('../config/connection');
const seedUser = require('./user.data');
const seedComments = require('./comments.data');
const seedSongs = require('./songs.data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedSongs();

  await seedComments();

  process.exit(0);
};

seedAll();
