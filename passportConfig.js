const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const {
    use
} = require("passport");

const {
    Sequelize
} = require('sequelize');

// ----------------------- END IMPORTS ----------------------- \\

module.exports = (passport, sequelize) => {

    const Users = require('./models/users')(sequelize)

    passport.use(
        new localStrategy(async (username, password, cb) => {
            const user = await Users.findOne({
                where: {
                    userUID: username
                }
            }).catch(err => {
                return cb(err)
            })

            //Returns false if no user
            if (!user) {    
                return cb(null, false)
            }

            const userData = {
                userUID: user.userUID,
                userMail: user.userMail,
                userName: user.userName,
                admin: user.admin
            }

            //Returns false if password not correct
            hash = user.userPass.replace(/^\$2y(.+)$/i, '$2a$1');
            bcrypt.compare(password, hash, function(err, res) {
                if(res === true) {
                    return cb(null, userData)
                } else {
                    return cb(null, false)
                }
            });

            //Implement user handling with sql: references 
            // https://github.com/passport/express-4.x-local-example/blob/master/server.js
            // https://github.com/woodburydev/passport-local-video/blob/master/backend/passportConfig.js
        })
    )

    //Takes a userData object and converts it into a userID
    passport.serializeUser((user, cb) => {
        cb(null, user.userUID)
    })

    //Takes a student id and converts it into a userData object
    passport.deserializeUser(async (student_id, cb) => {
        const user = await Users.findOne({
            where: {
                userUID: student_id
            }
        }).catch(err => {
            return cb(err)
        })

        const userData = {
            pending: false,
            authenticated: true,
            userUID: user.userUID,
            userMail: user.userMail,
            userName: user.userName,
            admin: user.admin
        }

        cb(null, userData)
    })

}