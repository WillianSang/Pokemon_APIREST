const express = require("express")
const { json } = require("sequelize")
const routerPokemon = require("../routers/pokemons.rotuer")

const server = express()

//router pokeapi
server.get('/', (req, res) => {
  res.send("endpoint principal")
})

server.use(routerPokemon)

module.exports = server