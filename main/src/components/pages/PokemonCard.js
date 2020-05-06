import React, { useState, useEffect } from "react";
import axios from "axios";
import InlineBlock from "react-inline-block";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

const PokemonCard = (props) => {
  const [actualPokemon, setActualPokemon] = useState({});
  const [sprites, setSprites] = useState({});

  useEffect(() => {
    axios.get(props.pokemon.url).then((res) => {
      setActualPokemon(res.data);
    });
  }, []);

  const { id, name, url } = props.pokemon;
  return (
    <div className="cards">
      <p>{name}</p>
      <Link
        exact
        path="/detail"
        render={(props) => <PokemonDetail actualPokemon={actualPokemon} />}
      >{`Go to ${name}'s details page`}</Link>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
};

export default PokemonCard;
