const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model { }
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        response: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blog_post',
                key: 'id'
            }
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        // name: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'user',
        //         key: 'name'
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);
module.exports = Comment;