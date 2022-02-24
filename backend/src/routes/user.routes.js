const { verifyAsync } = require('../lib/jwt');
const { authMiddleware } = require('../middlewares/auth.middleware');
const userModel = require('../models/user.model');

const profileHandler = async (request, reply) => {
	const { userId } = request;

	try {
		const existingUser = await userModel.findById(userId).exec();
		if (!existingUser) {
			reply.code(401);
			throw new Error('Usuario no autenticado');
		}

		return { id: userId, email: existingUser.email, name: existingUser.name };
	} catch (err) {
		reply.code(401);
		throw new Error('Usuario no autenticado');
	}
};

module.exports = (fastify, _, done) => {
	fastify.addHook('onRequest', authMiddleware);
	fastify.get('/profile', profileHandler);

	done();
};
