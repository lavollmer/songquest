const User = require("./User");
const Song = require("./Song");
const Comment = require("./Comments");


// we should sort this section together
User.hasMany(Song, {

})

User.hasMany(Comment, {

})

Song.hasMany(Comment, {
    onDelete:
})

Comment.belongsTo(
    //song? user? 
)








module.exports = {User, Song, Comment}