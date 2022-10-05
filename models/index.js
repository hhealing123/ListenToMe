const User = require('./User')
const UserPost = require('./UserPost')
const Comment = require('./Comment')

Comment.belongsTo(UserPost, {
    foreignKey: 'subject_id',
    onDelete: 'CASCADE'
})

UserPost.hasMany(Comment, {
    foreignKey: 'subject_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

UserPost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(UserPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { User, UserPost, Comment };