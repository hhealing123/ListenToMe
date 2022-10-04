const router = require('express').Router();
const { userPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newUserPost = await userPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json({ message: "You have added a new post to the blog:", newUserPost });
    } catch (err) {
        res.status(400).json({ message: "An error occured: ", err})
    }
});

router.put('/:id', async (req, res) =>{
    try {
        const blogPost = await BlogPost.update(
            {
                topic: req.body.topic,
                content: req.body.content,
                date_created: Date.now()
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!blogData) {
            res.status(404).json({ message: "there is no blog post associated with this id"});
            return;
        }
        res.status(200).json({message: "The post has successfully got deleted!", blogData})
    } catch (err) {
        res.status(500).json({message: "An error occured when trying to delete this post. Please try again...", err})
    }
})

module.exports = router;