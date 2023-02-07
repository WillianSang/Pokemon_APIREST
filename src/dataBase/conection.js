
const {Sequelize} = require('sequelize')

const dataBase = new Sequelize("Pokemons", "root", "9428", {
  host: 'localhost',
  dialect: "mysql"
})


module.exports = dataBase
