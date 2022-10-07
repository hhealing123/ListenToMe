const router = require('express').Router();
const path = require('path');

const contributors = [
    {
    contributor_name: 'Harvey Lee',
    email: 'hhealing123@gmail.com',
    },
    {
    contributor_name: 'Tyler Charro',
    email: 'tylercharro@gmail.com',
    },
    {
    contributor_name: 'Connor Banks',
    email: 'bankstamminen@gmail.com',
    },
    {
    contributor_name: 'Jose Otero',
    email: 'ieagle71@gmail.com',
    },
    {
    contributor_name: 'Tay Collins',
    email: 'msdavistoday@gmail.com',
    },
    {
    contributor_name: 'Matteo Ramazzini',
    email: 'mramazzini123@gmail.com',
    },
];

router.get('/contributors', async (req, res) => {
    res.render('all');
});

router.get('/contributors/:num', async (req, res) => {
    return res.render('contributors', contributors[req.params.num - 1]);
});

module.exports = router;