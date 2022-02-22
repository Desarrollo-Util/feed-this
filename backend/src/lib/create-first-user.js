const uuid = require('uuid-random');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');

const createFirstUser = async () => {
	const existingUser = await userModel.findOne().exec();

	if (!existingUser) {
		const hashedPassword = await bcrypt.hash('admin1234', 12);

		await userModel.create({
			_id: uuid(),
			name: 'Administrador',
			email: 'admin@desarrolloutil.com',
			password: hashedPassword,
		});
	}
};

module.exports = createFirstUser;
