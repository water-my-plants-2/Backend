
const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "test", password: bcrypt.hashSync("testing", 12),phoneNumber:555-555-5555 },
    { username: "test2", password: bcrypt.hashSync("testing2", 12),phoneNumber:555-5555-1111 }
  
  ]);
};
