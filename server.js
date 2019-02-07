const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const auth = require('./routes/auth');



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
  // Add routes, both API and view
  //app.use(routes);

// Connect to the Mongo DB
//localCB is local Concert Buddy database
//mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/localCB", { useNewUrlParser: true });
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1/mern-secure', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Database connection succesful'))
  .catch((err) => console.error(err));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
