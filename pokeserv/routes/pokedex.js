const pokedexModel = require('../models/pokedex.js');

function poke (router) {
  router.get('/', async function(req, res) {
    pokedexModel.getAll(res)
  })

  router.get('/pokemon', (req,res) => {
    console.log(req.query.length)
    const data = {
      'key' : Object.keys(req.query),
      'value': Object.values(req.query)
    }
    pokedexModel.getPokemon(data, res)
  })
}

module.exports = poke