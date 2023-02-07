const Pokemon = require("../models/pokemons.model")

exports.findAllPokemons = async (req, res) => {
  try {
    res.status(200).json({
      status: 'succes'
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: '*** Internal Server Error ***'
    })
  }
}

exports.findPokemon = async (req, res) => { 
  try {
    res.status(200).json({
      status: 'succes'
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: '*** Internal Server Error ***'
    })
  }
}


exports.createPokemon = async (req, res) => {
  try {
    // const {name, image} = req.body
    // const pokemon = await Pokemon.create({name: req.body.name, image: req.body.image})
    
    res.status(200).json({
      status: 'succes',
      // message: "pokemon created successfully",
      // pokemon
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: '*** Internal Server Error ***'
    })
  }
}


exports.updatePokemon = async (req, res) => {
  try {
    res.status(200).json({
      status: 'succes'
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: '*** Internal Server Error ***'
    })
  }
}

exports.deletePokemon = async (req, res) => {
  try {
    res.status(200).json({
      status: 'succes'
    })
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: '*** Internal Server Error ***'
    })
  }
}