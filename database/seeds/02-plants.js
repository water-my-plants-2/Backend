
exports.seed = function(knex, Promise) {
  return knex("plants").insert([
    {
      id: 1,
      nickname: "Prickly",
      species: "Cactus",
      h2o_frequency: "Monthly",
      image: "pictureurl",
      user_id: 1
    },
    {
      id: 2,
      nickname: "Spiderman",
      species: "Spider Plant",
      h2o_frequency: "Weekly",
      image: "pictureurl",
      user_id: 1
    }
  ]);
};