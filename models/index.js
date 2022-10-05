const User = require('./User');
const userPost = require('./user_post');
const Comment = require('./Comment');

Comment.belongsTo(userPost, {
    foreignKey: 'subject_id',
    onDelete: 'CASCADE'
})
userPost.hasMany(Comment, {
    foreignKey: 'subject_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

userPost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});