import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
          <p>{this.props.name}</p>
          <p>{this.props.height}</p>
          <hr/>
      </div>
    )
  }
}

export default Pokedex;
