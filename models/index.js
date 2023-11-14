const User = require("./User");
const Song = require("./Song");
const Comment = require("./Comment");


// we hopefully sorted out this section together
User.hasMany(Song, {
    foreignKey: 'user_id',
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Song.hasMany(Comment, {
    foreignKey: 'song_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Song, {
    foreignKey: 'song_id',
    onDelete: 'CASCADE'
})

Song.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
    // proper business likes SET NULL to never fully delete some information
    // additionally, DELETE routes function more like PUT routes (not using Model.destroy)
})





module.exports = { User, Song, Comment }