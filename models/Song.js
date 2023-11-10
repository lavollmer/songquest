const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
  {
    songTitle: {
      type: DataTypes.STRING
    },

    artist: {
      type: DataTypes.STRING
    },

    yearReleased: {
      type: DataTypes.INTEGER
    },

    songLink: {
      type: DataTypes.STRING
    }


  },



  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Song'
  }
);

module.exports = Song;