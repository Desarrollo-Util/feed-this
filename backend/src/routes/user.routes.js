const { verifyAsync } = require("../lib/jwt");
const userModel = require("../models/user.model");

const profileHandler = async (request, reply) => {
  const { authorization } = request.headers;

  if (!authorization) {
    reply.code(401);
    throw new Error("Usuario no autenticado");
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    reply.code(401);
    throw new Error("Usuario no autenticado");
  }

  try {
    const { id } = await verifyAsync(token);

    const existingUser = await userModel.findById(id).exec();
    if (!existingUser) {
      reply.code(401);
      throw new Error("Usuario no autenticado");
    }

    return { id, email: existingUser.email };
  } catch (err) {
    reply.code(401);
    throw new Error("Usuario no autenticado");
  }
};

module.exports = (fastify, _, done) => {
  fastify.get("/profile", profileHandler);

  done();
};
