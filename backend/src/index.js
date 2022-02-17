require('dotenv').config();
const fastify = require('fastify')();
const fastifyCors = require('fastify-cors');
const mongoose = require('mongoose');
const registerRoutes = require('./routes');

const createFirstUser = require('./lib/create-first-user');
const printTitle = require('./lib/print-title');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const bootstrap = async () => {
	try {
		printTitle();

		//Conexión con BD
		await mongoose.connect(MONGO_URI);
		console.log('✅ DB connected');

		//Creamos un usuario si no existe
		await createFirstUser();

		fastify.register(fastifyCors, {
			origin: ['http://localhost:3000'],
		});

		//Endpoints
		registerRoutes(fastify);

		//Arrancamos el servidor
		const address = await fastify.listen(PORT);
		console.log(`🚀 Server is now listening on ${address}`);
	} catch (error) {
		console.error(error);
		process.exit();
	}
};

bootstrap();
