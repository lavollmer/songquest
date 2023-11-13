const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
  {
    songTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },

    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // yearReleased: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },

    songLink: {
      type: DataTypes.STRING,
      allowNull: false
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