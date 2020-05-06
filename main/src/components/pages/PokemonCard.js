import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";
import Button from "../../elements/Button";
import { CatchedContext } from "../../CatchedContext";

const PokemonCard = (props) => {
  const [catched, setCatched] = useState(false);
  const [actualPokemon, setActualPokemon] = useState({});
  const [sprites, setSprites] = useState({});
  const [catchedPokemon, setCatchedPokemon] = useContext(CatchedContext);

  const catchNewPokemon = (e) => {
    e.preventDefault();
    setCatched(true);
    setCatchedPokemon([
      ...catchedPokemon,
      {
        name: actualPokemon.name,
        id: actualPokemon.id,
        path: path,
        sprite: sprites.front_default,
      },
    ]);
  };

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

  let catchButton;

  if (!catched) {
    catchButton = <Button onClick={catchNewPokemon}>Catch Pokemon</Button>;
  } else {
    catchButton = <Button>Already catched</Button>;
  }

  return (
    <div className="cards" key={actualPokemon.id}>
      <b>{actualPokemon.name}</b>
      <br />
      <img src={sprites.front_default} />
      <br></br>

      <Link
        to={path}
        render={(props) => <PokemonDetail actualPokemon={actualPokemon} />}
      >
        <Button to={path}>{`Go see ${actualPokemon.name}`}</Button>
      </Link>
      {catchButton}
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
};

export default PokemonCard;
