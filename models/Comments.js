const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
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
    modelName: 'Comment'
  }
);

module.exports = User;