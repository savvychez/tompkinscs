const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// ----------------------- END IMPORTS ----------------------- \\

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(process.env.SECRET));

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


// ---------------------- END MIDDLEWARE ---------------------- \\

const authRoute = require('./routes/auth');
app.use('/auth', authRoute)

// ---------------------- END ROUTING ---------------------- \\

app.use((err, req, res, next) => {
  console.log(err)
  next();
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

// ---------------------- END SERVER ---------------------- \\
