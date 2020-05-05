import React, { Component } from "react";
import axios from "axios";
import InlineBlock from "react-inline-block";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

export default class PokemonCard extends Component {
  state = {
    actualPokemon: {},
    sprites: {},
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then((res) => {
      this.setState({ actualPokemon: res.data });
    });
  }

  render() {
    const { id, name, url } = this.props.pokemon;
    return (
      <div className="cards">
        <p>{name}</p>
        <Link
          exact
          path="/detail"
          render={(props) => (
            <PokemonDetail actualPokemon={this.state.actualPokemon} />
          )}
        >{`Go to ${name}'s details page`}</Link>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
};
