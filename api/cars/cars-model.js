const db = require('../../data/db-config');

const getAll = () => {
  return db("cars")
}

const getById = (id) => {
  return db("cars").where({id}).first()
}

const create = async (changes) => {
  const [id] = await db("cars").insert(changes);
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}