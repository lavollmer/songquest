const { Song } = require('../models');

const songdata = [
  {
    songTitle: 'Printemps',
    artist: 'April 20, 2021 07:00:00',
    songLink: 'June 21, 2021 17:00:00',
  },
  {
    songTitle: 'Sommer',
    artist: 'June 22, 2021 09:00:00',
    songLink: 'September 22, 2021 22:00:00',
  },
  {
    songTitle: 'Herfst',
    artist: 'September 23, 2021 08:30:00',
    songLink: 'December 21, 2021 20:30:00',
  },
  {
    songTitle: 'Invierno',
    artist: 'December 22, 2020 11:00:00',
    songLink: 'March 19, 2021 19:00:00',
  },
];

const seedSongs = () => Song.bulkCreate(songdata);

module.exports = seedSongs;
