const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try {
        const blogData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });
        const blogPosts = blogData.map((Post) => Post.get({ plain: true }));

        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/topic/:id', withAuth, async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    try {
        const blogData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                model: Comment,
                    include: [
                        User
                    ]
                },

            ],
        });

    const blogPosts = blogData.get({ plain:true });
        console.log(blogPosts)
    res.render('topic', {
        blogPosts,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blogForm', withAuth, async(req,res) =>{
    console.log('this is the blogForm route')
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    
    res.render('blogForm', {
        logged_in: req.session.logged_in,
    });
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


router.post('/comment', async (req,res) => {
    console.log ('this is the comment route')
    console.log(req.body)
    console.log(req.session.user_id)
        try {
            const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        console.log(commentData)
        res.status(200).json({message: "comment successfully created"});
    } catch (err) {
        res.status(400).json({ message: "error posting comment"})
    }
})

router.post('/logout', (req, res) => {
    console.log('logout route before if statement')
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;