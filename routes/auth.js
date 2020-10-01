const express = require('express');
const router = express.Router();
const passport = require("passport")
require('dotenv').config()

module.exports = (sequelize) => {
    require("../passportConfig")(passport, sequelize);

    router.get('/register', (req, res, next) => {
        console.log(req.body)
    })

    router.post('/login', (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err
            if (!user) {
                console.log("No user!")
                res.send("Error!")
            } else {
                req.logIn(user, (err) => {
                    if (err) throw err;
                    res.send("Successfully Authenticated");
                    req.session.count = 1
                    console.log(req.user);
                });
            }
        })(req, res, next)
    })

    router.get('/logout', (req, res, next) => {
        req.logout();
        res.end("Logged out!")
    })

    router.get('/data', (req, res, next) => {
        console.log("DATA")
        if (req.user)
            res.json(req.user)
        else {
            res.json({
                "pending": false,
                "authenticated": false
            })
        }
    })

    return router;
}