require("dotenv").config();
const fastify = require("fastify")();
const mongoose = require("mongoose");

const createFirstUser = require("./lib/create-first-user");
const printTitle = require("./lib/print-title");
const userModel = require("./models/user.model");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const bootstrap = async () => {
  try {
    printTitle();

    //Conexión con BD
    await mongoose.connect(MONGO_URI);
    console.log("✅ DB connected");

    //Creamos un usuario si no existe
    await createFirstUser();

    //Login
    // TODO: Implementar este login correctamente
    // ya que ahora mismo no funciona
    fastify.post("/login", async (request) => {
      const { email, password } = request.body;
      const existingUser = await userModel.findOne({ email });

      if (!existingUser) return "Las credenciales son incorrectas";

      const isSamePassword = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isSamePassword) return "Las credenciales son incorrectas";

      return "Login correcto";
    });

    //Arrancamos el servidor
    const address = await fastify.listen(PORT);
    console.log(`🚀 Server is now listening on ${address}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

bootstrap();
