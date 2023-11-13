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

    songLink: {
      type: DataTypes.STRING,
      allowNull: false
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
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