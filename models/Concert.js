const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const concertSchema = new Schema({

	artist: { type: String, unique: false, required: false },
	venue: { type: String, unique: false, required: false },
	date: { type: Date, unique: false, required: false },
	time: { type: String, unique: false, required: false },
	city: { type: String, unique: false, required: false },
	latitude: { type: Number, unique: false, required: false },
	longitude: { type: Number, unique: false, required: false },
	attendess: [
		{
		type: Schema.Types.ObjectId,
		ref: "User", unique: false, required: false    
		}
]

})

const Concert = mongoose.model('Concert', concertSchema)
module.exports = Concert