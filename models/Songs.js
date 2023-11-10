const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
  {
    first_name: {
      type: DataTypes.STRING
    },
    lastName: {
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

module.exports = User;