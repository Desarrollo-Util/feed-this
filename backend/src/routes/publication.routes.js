const { authMiddleware } = require('../middlewares/auth.middleware');
const PublicationModel = require('../models/publication.model');

const create = async (request, reply) => {
	const { userId } = request;
	const { id, publishDate, posts } = request.body;

	// Validar
	throw new Error('Not implemented');
};
const update = async (request, reply) => {
	throw new Error('Not implemented');
};
const updateSchedule = async (request, reply) => {
	throw new Error('Not implemented');
};
const remove = async (request, reply) => {
	throw new Error('Not implemented');
};
const findById = async (request, reply) => {
	throw new Error('Not implemented');
};
const find = async (request, reply) => {
	throw new Error('Not implemented');
};

module.exports = (fastify, _, done) => {
	fastify.addHook('onRequest', authMiddleware);

	fastify.post('/publication', create); // Crear y crear + programar
	fastify.patch('/publication/update', update); // Actualizar datos del tweet
	fastify.patch('/publication/update-schedule', updateSchedule); // Actualizar/Eliminar programación del tweet
	fastify.delete('/publication/delete', remove); // Eliminar tweet y programación si tiene
	fastify.get('/publication/:id', findById); // Detalles de una publicación
	fastify.get('/publications', find); // Listar todas las publicaciones del usuario

	done();
};
