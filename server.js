const express = require("express");
//IB for sessions
const bodyParser = require('body-parser')
const session = require('express-session')
const dbConnection = require('./models')
const MongoStore = require('connect-mongo')(session)
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//const auth = require('./routes/auth');
const mongoose = require("mongoose");
// const routes = require("./routes");
const user = require('./routes/api/user')
//IB adding for passport
const passport = require('passport');

//IB adding for database.  Moved moongoose connection to index file for models
//const config = require('./config');
// IB adding to connect to the database and load models
//require('./models').connect(config.dbUri);

// MIDDLEWARE
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'struggling-ninja', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// IB to pass the passport middleware
app.use(passport.initialize());
app.use(passport.session()) // calls the deserializeUser


// IB to load passport local strategies
const localSignupStrategy = require('./passport/signup');
const localLoginStrategy = require('./passport/login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//routes
// Routes
app.use('/user', user)
//app.use('/auth', authRoutes); 
//app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
