
const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "test", password: bcrypt.hashSync("testing", 12),phonenumber:555-555-5555 }
  ]);
};
