const { sign, verify } = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "default_secret_key";

const signAsync = (payload, signOptions) =>
  new Promise((resolve, reject) => {
    sign(payload, jwtSecret, signOptions, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });

const verifyAsync = (token) =>
  new Promise((resolve, reject) => {
    verify(token, jwtSecret, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });

module.exports = {
  signAsync,
  verifyAsync,
};
