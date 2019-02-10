const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const auth = require('./routes/auth');
const mongoose = require("mongoose");
const routes = require("./routes");
//IB adding for passport
const passport = require('passport');

//IB adding for database.  Moved moongoose connection to index file for models
const config = require('./config');
// IB adding to connect to the database and load models
require('./models').connect(config.dbUri);
// Define middleware here
// IB to pass the passport middleware
app.use(passport.initialize());

// IB to load passport local strategies
const localSignupStrategy = require('./passport/signup');
const localLoginStrategy = require('./passport/login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// IB Added to pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
//IB adding routes for auth
const authRoutes = require('./routes/auth');
//const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
//app.use('/api', apiRoutes);  
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finalproject", { useNewUrlParser: true });
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
