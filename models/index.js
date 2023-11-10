const User = require("./User");
const Song = require("./Song");
const Comment = require("./Comments");



User.hasMany(Song, {

})

User.hasMany(Comment, {

})

Song.hasMany(Comment, {

})

Comment.belongsTo(
    //song? user? 
)








module.exports = {User, Song, Comment}