const authRouter = require('./auth');

module.exports = (app) => {

    app.use('/auth', authRouter);

    app.get('/', (req, res, next) => {
        res.send("Welcome to the home page ");
        const host = req.get("Host");
        console.log(host);
    });

    app.get('/user/:id/:postId', (req, res, next) => {
        console.log(req.params);
        console.log(req.query);

        res.send("Welcome to the user page after nodemon");
    });
};