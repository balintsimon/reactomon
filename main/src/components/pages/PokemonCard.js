import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

const PokemonCard = (props) => {
  const [actualPokemon, setActualPokemon] = useState({});
  const [sprites, setSprites] = useState({});

  useEffect(() => {
    axios
      .get(props.pokemon.url)
      .then((res) => {
        setActualPokemon(res.data);
        setSprites(res.data.sprites);
      })
      .then(axios.get)
      .then(console.log);
  }, []);

  return (
    <div className="cards" key={actualPokemon.id}>
      <p>{actualPokemon.name}</p>
      <img src={sprites.front_default} />
      <br></br>
      <Link
        path={`/pokemon/` + actualPokemon.id}
        render={(props) => <PokemonDetail actualPokemon={actualPokemon} />}
      >{`Go to ${actualPokemon.name}'s details page`}</Link>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
};

export default PokemonCard;
