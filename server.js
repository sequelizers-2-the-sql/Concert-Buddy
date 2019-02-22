const express = require("express");
//IB for sessions
const bodyParser = require('body-parser')
const session = require('express-session')
const Model = require('./models')
let dbConnection =  Model.mongoose
const MongoStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

//ib for chat app 2.16.19
// import ChatMessage from './client/src/components/ChatMessage';
// import Signup from './client/src/components/Signup';
// import ChatApp from './client/src/components/ChatApp';
// import { default as Chatkit } from '@pusher/chatkit-server';

// const chatkit = new Chatkit({
//   instanceLocator: "v1:us1:bba82808-7449-4f24-a517-a97ac38da58a",
//   key: "b45deb0b-fb92-473a-86b6-28b3866ae055:BZhEh5QKDNYunYk7GTKn0DZjXaVzTKDuHWXGbmnzTio="
// })

const routes = require('./routes')
//IB adding for passport
const passport = require('passport');

// MIDDLEWARE
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions --> creates an empty session object, as req.session
// saves the session object to the database
app.use(
	session({
		secret: 'struggling-ninja', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// IB to pass the passport middleware
app.use(passport.initialize());
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
