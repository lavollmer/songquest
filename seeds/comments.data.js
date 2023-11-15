const { Comment } = require('../models');
const commentsdata = [
  {
    author: 'Gary',
    content: 'This song is da bomb, as the kids say',
    song_id: 1,
    user_id: 1
  },
  {
    author: 'Ben',
    content: 'The title needs work',
    song_id: 2,
    user_id: 2
  },
  {
    author: 'Katy',
    content: 'you spelt Benny wrong',
    song_id: 3,
    user_id: 3
  },
  {
    author: 'Gary',
    content: 'Tequila > Margaritas',
    song_id: 4,
    user_id: 1
  },
  {
    author: 'Ben',
    content: 'The Minnesota Gurls parody has nothing on this',
    song_id: 5,
    user_id: 2
  },
  {
    author: 'Katy',
    content: 'ya like jazz?',
    song_id: 6,
    user_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentsdata);

module.exports = seedComments;