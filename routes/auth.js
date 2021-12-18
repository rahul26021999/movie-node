const { Router } = require('express');
const { get } = require('express/lib/response');
const router = Router();

router.get('/login', (req, res, next) => {
        res.send("welcome to login page");
    })
    .post('/login')
    .get('/signup')
    .post('/signup')

module.exports = router;