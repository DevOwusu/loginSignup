const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
	console.log('database connected');
})
.catch((err) => {
	console.log(err)
})

const logInSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	password: {
		type: String,
		required: true
	}
})

const collection = new mongoose.model("User", logInSchema)

module.exports = collection;