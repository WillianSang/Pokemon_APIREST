const { Router } = require("express");
const { 
  findAllPokemons, 
  findPokemon, 
  createPokemon, 
  updatePokemon, 
  deletePokemon 
} = require("../controllers/pokemons.controller");

const routerPokemon = Router()
const paths = {
  pokemons: '/api/v1/pokemons'
} 

routerPokemon.get( `${paths.pokemons}/`, findAllPokemons )

routerPokemon.get( `${paths.pokemons}/:id`, findPokemon )

routerPokemon.post( `${paths.pokemons}/`, createPokemon )

routerPokemon.patch( `${paths.pokemons}/:id`, updatePokemon)

routerPokemon.delete( `${paths.pokemons}/:id`, deletePokemon)


module.exports = routerPokemon