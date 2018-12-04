const pokedex = require ('../data/pokedex.json')

class Pokedex {
  
  static getAll(res) {
    let data = []
    pokedex.forEach(element => {
      data.push({
        'ndex': element.ndex,
        'nom': element.nom,
        'taille': element.taille,
        'poids': element.poids,
      })
    });
    res.send(data);
  }

  static getPokemon(data, res) {
    let pokemon = pokedex.find((item) => {
      return item[data.key] == data.value;
    })
    res.json(pokemon)
  }

}

module.exports = Pokedex