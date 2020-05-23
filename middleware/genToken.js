const jwt = require("jsonwebtoken");
const secrets = require('../config/secrets.js')

function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username,
  };

  const options = { expiresIn: "2w" };

  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = {
  genToken
};