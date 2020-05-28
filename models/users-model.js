const db = require("../database/dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  remove
}

function find() {
  return db("users");
};

function findBy(filter) {
  return db("users")
    .where(filter)
    .first()
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first()
    .returning("id") ;
}

function insert(newUser) {
  return db("users")
    .insert(newUser, "id")
    .returning("id")
    .then(id => {
      return findById(id[0]); 
    });
};

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .returning("id"); ;
};

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
};