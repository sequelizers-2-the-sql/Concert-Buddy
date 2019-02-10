let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ConcertSchema = new Schema({
    artist: String,
    venue: String,
    date: Date,
    time: {
        type: String,
        default: "TBD"
    },
    city: String,
    latitude: Number,
    longitude: Number,
    attendess: [
        {
        type: Schema.Types.ObjectId,
        ref: "User"    
        }
    ]
});

let Concert = mongoose.model("Concert", ConcertSchema);

module.exports = Concert;