const router = require('express').Router();
const path = require('path');

const contributors = [
    {
    contributor_name: 'Harvey Lee',
    email: 'hhealing123@gmail.com',
    phone_number: '956-566-6693'
    },
    {
    contributor_name: 'Tyler Charro',
    email: 'tylercharro@gmail.com',
    phone_number: '956-566-6693'
    },
    {
    contributor_name: 'Connor Banks',
    email: 'bankstamminen@gmail.com',
    phone_number: '956-566-6693'
    },
    {
    contributor_name: 'Jose Otero',
    email: 'ieagle71@gmail.com',
    phone_number: '956-566-6693'
    },
    {
    contributor_name: 'Tay Collins',
    email: 'msdavistoday@gmail.com',
    phone_number: '956-566-6693'
    },
    {
    contributor_name: 'Matteo Ramazzini',
    email: 'mramazzini123@gmail.com',
    phone_number: '956-566-6693'
    },
];

router.get('/contributors', async (req, res) => {
    res.render('all');
});

router.get('/contributors/:num', async (req, res) => {
    return res.render('contributors', contributors[req.params.num - 1]);
});

module.exports = router;