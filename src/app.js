const server = require("./server");
const port = 3000
const Pokemon = require("./models/pokemons.model");



async function runServer() {
  try { 
    await Pokemon.sync()
      .then(() => {
        console.log("conection success")
      })
    server.listen(port, () => {
      console.log(`server ready and listening in port: ${port}`)
    })
  } 
  catch (error) {
    console.error('Unable connection to database:', error);
  }
}

runServer()