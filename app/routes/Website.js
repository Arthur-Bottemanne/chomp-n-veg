const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the website!');
});

router.get('/about', (req, res) => {
    res.send('This is the About page.');
});

module.exports = router;
