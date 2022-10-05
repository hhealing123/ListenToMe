const router = require('express').Router();
const { userPost } = require('../../models');
const withAuth = require('../../utils/auth');

// Allows user to post a new post to the blog.
router.post('/', withAuth, async (req, res) => {
    try {
        // When user adds new post to the blog, the post will show user's id and description of the post.    
        const newUserPost = await userPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json({ message: "You have added a new post to the blog:", newUserPost });
    } catch (err) {
        res.status(400).json({ message: "An error occured: ", err})
    }
});

// Specific post can be found by entering the id number of the post. 
router.put('/:id', async (req, res) =>{
    try {
        // The post will show the subject and content of the post, as well as showing when the post was created.
        const newPostData = await userPost.update(
            {
                subject: req.body.subject,
                content: req.body.content,
                date_created: Date.now()
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(newPostData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// This allows user to delete the existing post that they posted by entering in the id of the post.
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await userPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: "There is no post associated with this id. Please try again..." });
            return;
        }
        res.status(200).json({ message: "The post got deleted successfully!", postData })
    } catch (err) {
        res.status(500).json({ message: "An error occured when trying to delete this post. Please try again...", err })
    }
})

module.exports = router;