const { model, Schema, Types } = require('mongoose');

const PUBLICATION_STATUS = {
	DRAFT: 'DRAFT',
	SCHEDULED: 'SCHEDULED',
	PUBLISHED: 'PUBLISHED',
};

const PostSchema = {
	content: { type: String },
	picUrl: { type: String },
};

const PublicationSchema = new Schema({
	_id: { type: String, _id: false },
	userId: { type: Types.ObjectId, ref: 'User', required: true },
	status: {
		type: String,
		enum: Object.values(PUBLICATION_STATUS),
		required: true,
	},
	createdAt: { type: Date, required: true },
	publishDate: { type: Date },
	posts: { type: [PostSchema] },
});

module.exports = model('Publication', PublicationSchema);
