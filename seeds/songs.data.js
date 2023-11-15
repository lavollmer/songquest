const { Song } = require('../models');

const songdata = [
  {
    songTitle: 'Old Town Road',
    artist: 'Lil Nas X',
    songLink: "https://www.youtube.com/embed/r7qovpFAGrQ?si=5B30Ra049Ha83vMG",
    user_id: 1
  },
  {
    songTitle: "Gary's Song",
    artist: 'SpongeBob SquarePants',
    songLink: "https://www.youtube.com/embed/nCoN16zdM08?si=QQLnBkXRHHJtXFQp",
    user_id: 1
  },
  {
    songTitle: 'Bennie and the Jets',
    artist: 'Elton John',
    songLink: "https://www.youtube.com/embed/wo1OwRTRKRk?si=Vm-mHzY8Ytr0ar3K",
    user_id: 2
  },
  {
    songTitle: 'Margaritaville',
    artist: 'Jimmy Buffet',
    songLink: "https://www.youtube.com/embed/ue2-ZVxpVjc?si=GcR6ZyuipqNWx7p2",
    user_id: 2
  },
  {
    songTitle: 'California Gurls',
    artist: 'Katy Perry',
    songLink: "https://www.youtube.com/embed/q7hK_liBVzk?si=TMiLgRPYzAiGo2NB",
    user_id: 3
  },
  {
    songTitle: 'A Night in Tunisia',
    artist: 'Dizzy Gillespie',
    songLink: "https://www.youtube.com/embed/eQHpwnXf0mI?si=GjNbO1T2vNFQCa2X",
    user_id: 3
  },
];

const seedSongs = () => Song.bulkCreate(songdata);

module.exports = seedSongs;
