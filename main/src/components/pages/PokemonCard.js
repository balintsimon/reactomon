import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";
import Button from "../../elements/Button";

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

  const path = `/pokemon/${actualPokemon.id}`;

  return (
    <div className="cards" key={actualPokemon.id}>
      <b>{actualPokemon.name}</b>
      <br />
      <img src={sprites.front_default} />
      <br></br>

      <Button to={path}>
        <Link
          to={path}
          render={(props) => <PokemonDetail actualPokemon={actualPokemon} />}
        >{`Go see ${actualPokemon.name}`}</Link>
      </Button>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
};

export default PokemonCard;
