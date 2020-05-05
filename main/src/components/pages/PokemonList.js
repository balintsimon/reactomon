import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <div key={pokemon.id} name={pokemon.name} data-url={pokemon.url}>
        <PokemonCard pokemon={pokemon} />
      </div>
    ));
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
