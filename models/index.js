//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//adding to fix the Heroku issue.
//COMMENT OUT BEFORE using this locally
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://concerbuddy:concertbuddy2@ds123645.mlab.com:23645/heroku_phjs0vs3";
//mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });
//end adding to fix Heroku issue.  

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/localCB", { useNewUrlParser: true });


//your local database url.  COMMENT OUT BEFORE pushing to Heroku!!!!
//27017 is the default mongoDB port
//const uri = 'mongodb://127.0.0.1:27017/localCB' 
//BELOW DOES THE MONGO CONNECTION (mongoose.connect)
// mongoose.connect(uri).then(
//     () => { 
//         /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
//         console.log('Connected to Mongo');
        
//     },
//     err => {
//          /** handle initial connection error */ 
//          console.log('error connecting to Mongo: ')
//          console.log(err);
         
//         }
//   );


module.exports = {
    mongoose: mongoose.connection,
    Concert: require("./Concert"),
    User: require("./User")
      };
      