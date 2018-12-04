import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';

import Pokedex from './components/Pokedex.js'
import Pokemon from './components/Pokemon.js'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:4242/")
      .then(res => {
        const poke = res.data
        this.setState({
          pokemons: poke
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const pokeList = this.state.pokemons.map((item, index) => {
      return <Pokedex key={index} name={item.nom} height={item.taille} ndex={item.ndex} />
    })

    return (

      {/* <Router>
        <Swicth>
          <Route />  
        </Swicth> 
      </Router> */}
      
      <div className="App">
        <div>
          {pokeList}
        </div>
      </div>
    );
  }
}

export default App;

// this.props.match.params.id
{/* <Router>
  <Link>
    <Route />
  </Link>
</Router> */}