import React, { Component } from 'react';

import Pokemon from './Pokemon.js'

class Pokedex extends Component {
  render() {
    let index;
    if (this.props.ndex.substring(0,2) === '00') {
      index = this.props.ndex.substring(2);
    } else if (this.props.ndex.charAt(0) === '0') {
      index = this.props.ndex.substring(1);
    } else {
      index = this.props.ndex
    }

    return (
      <div>
        <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+index+'.png'} alt={this.props.name} />
        <Pokemon />
        <p>{this.props.name}</p>
        <p>{this.props.height}</p>
        <hr/>
      </div>
    )
  }
}

export default Pokedex;

//https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md