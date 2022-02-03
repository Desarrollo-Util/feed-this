const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

module.exports = fastify => {
	fastify.register(authRoutes);
	fastify.register(userRoutes);
};
