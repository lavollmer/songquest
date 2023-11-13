const { Comment } = require('../models');
const commentsdata = [
  {
    author: 'Zack',
    content: 'This song is da bomb, as the kids say',
    song_id: 1,
    user_id: 1
  },
  {
    author: 'Stark',
    content: 'insert comment here',
    song_id: 1,
    user_id: 2
  },
  {
    author: 'Laura',
    content: 'insert another comment here',
    song_id: 1,
    user_id: 3
  },
  {
    author: 'Sushi',
    content: 'insert yet another comment here',
    song_id: 1,
    user_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentsdata);

module.exports = seedComments;