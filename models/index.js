const User = require('./user');
const Post = require('./user_post');
const Comment = require('./comment');

Comment.belongsTo(Post, {
    foreignKey: 'subject_id',
    onDelete: 'CASCADE'
})
Post.hasMany(Comment, {
    foreignKey: 'subject_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
