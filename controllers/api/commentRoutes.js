const router = require('express').Router();
const { BlogPost, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// The post allows user to add comments to the existing post to the blog.
router.post('/', withAuth, async (req,res) => {
        try {
            const commentData = await Comment.create({
            // When user adds comment to the post, the comment will show user's id and description of the comment.
            ...req.body,
            user_id: req.session.user_id, 
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ]
        });
        res.status(200).json({ message: "Your comment has been added to the post!" });
    } catch (err) {
        res.status(400).json({ message: "An error occured when posting comment to the post. Please try again..."})
    }
})

module.exports = router;