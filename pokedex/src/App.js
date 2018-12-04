import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Pokedex from './components/Pokedex.js'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:4242/")
      .then(res => {
        const poke = res.data
        this.setState({
          pokemon: poke
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const pokeList = this.state.pokemon.map((item, index) => {
      return <Pokedex key={index} name={item.nom} height={item.taille} ndex={item.ndex} />
    })

    return (
      <div className="App">
        <div>
          {pokeList}
        </div>
      </div>
    );
  }
}

export default App;
