const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
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
    modelName: 'User'
  }
);

module.exports = User;