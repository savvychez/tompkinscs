const express = require('express');
const router = express.Router();
require('dotenv').config()

router.get('/register', (req, res, next) => {

})

router.get('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err) throw err
        if(!user) {

        } else {
            
        }
    })
})

router.get('/logout', (req, res, next) => {
    req.logout();
})