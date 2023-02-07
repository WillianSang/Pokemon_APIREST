const { DataTypes } = require("sequelize");
const dataBase = require("../dataBase/conection");

const Pokemon = dataBase.define('Pokemon', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "available",
    allowNull: false
  }
})

module.exports = Pokemon

