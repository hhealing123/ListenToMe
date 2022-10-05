const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class userPost extends Model {}

userPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userPost',
  }
);

module.exports = User;