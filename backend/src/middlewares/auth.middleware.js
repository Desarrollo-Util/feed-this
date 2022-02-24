const { verifyAsync } = require('../lib/jwt');

const authMiddleware = async (request, reply) => {
	const { authorization } = request.headers;

	if (!authorization) {
		reply.code(401);
		throw new Error('Usuario no autenticado');
	}

	const token = authorization.split(' ')[1];

	if (!token) {
		reply.code(401);
		throw new Error('Usuario no autenticado');
	}

	try {
		const { id } = await verifyAsync(token);
		request.userId = id;
	} catch (err) {
		reply.code(401);
		throw new Error('Usuario no autenticado');
	}
};

module.exports = { authMiddleware };
