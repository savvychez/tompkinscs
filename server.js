const express = require('express') //HTTP Server
const session = require("express-session") //Session Management
const cookieParser = require("cookie-parser") //Session cookie reading
const bodyParser = require('body-parser') //HTTP -> JSON
const passport = require("passport") //Auth lib
const morgan = require('morgan') //Logger
const cors = require('cors')

const {
  Sequelize
} = require('sequelize') //ORM for MySQL

require('dotenv').config(); //Initialize environment vars

//Initializes express application
const app = express();
const port = process.env.PORT || 5000;

// ----------------------- END IMPORTS ----------------------- \\

//Initialize MySQL ORM
//TODO switch to env connection vars
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { // db, u, p
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

//Parse JSON from HTTP
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

//CORS
app.use(
  cors({
    origin: "https://app.tompkinscs.com", // <-- location of the react app were connecting to
    credentials: true,
  })
);

//Create Session with env secret
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

//Parse session cookie from request
app.use(cookieParser(process.env.SECRET));

//Init passport auth & session
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport, sequelize);

//Log HTTP Requests
app.use(morgan('tiny'))

// ---------------------- END MIDDLEWARE ---------------------- \\

const authRoute = require('./routes/auth')(sequelize); //Authentication reqs routed to routes/auth.js
app.use('/auth', authRoute)

const quizRoute = require('./routes/quiz')(sequelize)
app.use('/quiz', quizRoute)

// ---------------------- END ROUTING ---------------------- \\

app.use((err, req, res, next) => { //Logs errors
  console.log(err)
  next();
})

app.listen(port, async () => { //Starts server & connects to MySQL DB
  try {
    await sequelize.authenticate();
    console.log('MySQL Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server listening on port ${port}`)
});

// ---------------------- END SERVER ---------------------- \\