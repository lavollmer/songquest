const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    song_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Songs',
        key: 'id',
      }
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
    modelName: 'Comments'
  }
);

module.exports = Comments;

// gallery_id: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: 'gallery',
//     key: 'id',
//   },
// }