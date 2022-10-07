const router = require('express').Router();
const { BlogPost, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        userData = await User.findAll({
            include: [
                {
                    model: BlogPost,
                    attributes: ['id', 'topic', 'content']
                },
            ],
        },
        res.status(200).json(userData));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json({message: "User cannot be created. Please try again!", err});
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: "The email is not valid. Please try again!"});
            return;
        }

        const correctPassword = await userData.checkPassword(req.body.password);

        if (!correctPassword) {
            res.status(400).json({ message: "The password is not valid. Please try again!"});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: "You are successfully logged in!"});
        });
    } catch (err) {
        res.status(400).json({ message: "An error occured while logging in. Please try again!", err })
    }
})

module.exports = router;