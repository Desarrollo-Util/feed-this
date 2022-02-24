require('dotenv').config();
const fastify = require('fastify')();
const fastifyCors = require('fastify-cors');
const mongoose = require('mongoose');
const registerRoutes = require('./routes');

const createFirstUser = require('./lib/create-first-user');
const printTitle = require('./lib/print-title');

const Agenda = require('agenda');

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

//TODO Remove this proof of concept
const initAgenda = async () => {
	const mongoConnection = await mongoose
		.createConnection(MONGO_URI)
		.asPromise();
	const agenda = new Agenda();

	agenda.mongo(mongoConnection.db);

	await agenda.start();

	const jobs = await agenda.jobs({ name: 'test', 'data.id': 'bs' });
	console.log(jobs);

	// agenda.define('test', ({ name }) => {
	// 	console.log(`Nombre : ${name}`);
	// });

	// const fecha1 = new Date();
	// fecha1.setMinutes(fecha1.getSeconds() + 10);

	// const fecha2 = new Date();
	// fecha2.setMinutes(fecha2.getSeconds() + 12);

	// agenda.schedule(fecha1, 'test', { id: 'as', name: 'Jose' });
	// agenda.schedule(fecha2, 'test', { id: 'bs', name: 'Pablo' });
};

bootstrap();
