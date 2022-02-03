const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const { signAsync } = require('../lib/jwt');

const loginHandler = async (request, reply) => {
	const { email, password } = request.body;

	if (
		!email ||
		!password ||
		typeof email !== 'string' ||
		typeof password !== 'string'
	) {
		reply.code(400);
		throw new Error('Formato de entrada incorrecto');
	}

	const existingUser = await userModel.findOne({ email });

	if (!existingUser) {
		reply.code(401);
		throw new Error('Las credenciales son incorrectas');
	}

	const isSamePassword = await bcrypt.compare(password, existingUser.password);

	if (!isSamePassword) {
		reply.code(401);
		throw new Error('Las credenciales son incorrectas');
	}

	const token = await signAsync(
		{ id: existingUser._id },
		{ expiresIn: '180d' }
	);

	return { token };
};

module.exports = (fastify, _, done) => {
	fastify.post('/login', loginHandler);

	done();
};
