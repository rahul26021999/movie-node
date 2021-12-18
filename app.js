const express = require('express');

const app = express();

// Routes
app.get('/', (req, res, next) => {
    // res.status(200).send("Welcome to the home page ");

    // res.json({
    //     message: "Welcome to the homepage"
    // });
    res.redirect("/user");

});

app.get('/user', (req, res, next) => {
    res.send("Welcome to the user page after nodemon");
})

module.exports = app;