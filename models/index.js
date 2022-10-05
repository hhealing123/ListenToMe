const User = require('./User');
const BlogPost = require('./discussion');
const Comment = require('./Comment');

Comment.belongsTo(BlogPost, {
    foreignKey: 'topic_id',
    onDelete: 'CASCADE'
})
BlogPost.hasMany(Comment, {
    foreignKey: 'topic_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// User.hasMany(Comment, {
//     foreignKey: 'comment_id'
// })


BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
