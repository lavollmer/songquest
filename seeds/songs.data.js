const { Song } = require('../models');

const songdata = [
  {
    songTitle: 'Printemps',
    artist: 'April 20, 2021 07:00:00',
    songLink: 'https://www.youtube.com/embed/2nevzCzm_GQ?si=ZEPlhKaaiZdFtSXf',
  },
  {
    songTitle: 'Sommer',
    artist: 'June 22, 2021 09:00:00',
    songLink: 'https://www.youtube.com/embed/kwZIS_lx5yo?si=3bmSfn0lOKyGdXSI',
  },
];

const seedSongs = () => Song.bulkCreate(songdata);

module.exports = seedSongs;
