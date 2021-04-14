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

const update = async (id, changes) => {
  await db("cars").where({id}).update(changes)
  return getById(id)
}

const remove = async (id) =>{
  const oldCar = await getById(id);
  await db('cars').where({id}).del()
  return oldCar
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}