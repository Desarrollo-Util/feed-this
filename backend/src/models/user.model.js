const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
	_id: { type: String, _id: false },
	email: { type: String, index: true },
	password: { type: String, required: true },
	twitter_api_key: { type: String, required: false },
	twitter_api_secret: { type: String, required: false },
});

module.exports = model('User', UserSchema);
