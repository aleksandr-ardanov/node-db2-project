const express = require("express")
const router = require('./cars/cars-router')
const server = express()

// DO YOUR MAGIC
server.use(express.json())
server.use('/api/cars', router)

module.exports = server
