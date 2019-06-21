const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getGameById,
  getAll
};

function getAll() {
  return db("games");
}

async function insert(game) {
  const [id] = await db("games").insert(game);
  return db("games")
    .where({ id })
    .first();
}

async function getGameById(id) {
  return db("games")
    .where({ id })
    .first();
}
