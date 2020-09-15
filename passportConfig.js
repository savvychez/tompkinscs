const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
    passport.use(
        new localStrategy((username, password, cb) => {
            //Implement user handling with sql  
            // https://github.com/passport/express-4.x-local-example/blob/master/server.js
            // https://github.com/woodburydev/passport-local-video/blob/master/backend/passportConfig.js
        })
    )
    
    passport.serializeUser((user, cb) => {
        cb(null, user.student_id)
    })

    passport.deserializeUser((student_id, cb) => {
        //Query user by ID
        //cb(err, userdata)
    })

}