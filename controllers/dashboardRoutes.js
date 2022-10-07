const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async(req,res) =>{
    try {
        
        const userProfile = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: BlogPost,
                }
            ]
        });

        const profile = userProfile.get({ plain: true });

        res.render('dashboard', {
            profile,
            logged_in: req.session.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/editPost/:id', async (req, res) => {
    try {
        const editPost = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attribute: ['name']
                },
            ],
        });

        const editPosts = editPost.get({ plain: true });

        res.render('editPost', {
            editPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
}); 

module.exports = router;