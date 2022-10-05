const router = require('express').Router();
const { Comment, userPost, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try {
        const userPostData = await userPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });
        // This will serialize the data, that is, turning data/variables into a representation such as string that allow to easily be written or read back from the database.
        const userPosts = userPostData.map((Post) => Post.get({ plain: true }));
        res.render('homepage', {
            userPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// User can see specific post and comments associated with the post by inserting the id of the subject.
router.get('/subject/:id', withAuth, async (req, res) => {
    // If user is not logged in, user will be redirected to the login page, thus unable to view the post until logged in.
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    try {
        const userPostData = await userPost.findByPk(req.params.id, {
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

    const userPosts = userPostData.get({ plain: true });
    res.render('subject', {
        userPosts,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newPost', withAuth, async(req,res) =>{
    // User will only be able to create a new post if they are logged in. Will redirect the user to the login page if they are not logged in.
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('newPost', {
        logged_in: req.session.logged_in,
    });
})

router.get('/login', (req, res) => {
    // If user is already signed in, then it will redirect user to the homepage.
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.post('/comment', async (req,res) => {
        try {
            const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json({ message: "Your comment has been added to the post!" });
    } catch (err) {
        res.status(400).json({ message: "An error occured when posting comment. Please try again..."})
    }
})

router.post('/logout', (req, res) => {
    // When user logs out, it will destroy user's session.
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;