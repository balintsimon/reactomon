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
    if (catchedPokemon.length != 0) {
      setCatchedPokemon([
        ...catchedPokemon,
        {
          name: actualPokemon.name,
          id: actualPokemon.id,
          path: path,
          sprite: sprites.front_default,
        },
      ]);
    } else {
      setCatchedPokemon([
        {
          name: actualPokemon.name,
          id: actualPokemon.id,
          path: path,
          sprite: sprites.front_default,
        },
      ]);
    }
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
    catchButton = (
      <button
        type="button"
        class="btn btn-outline-secondary"
        onClick={catchNewPokemon}
        style={{ textTransform: "uppercase" }}
      >
        Catch!
      </button>
    );
  } else {
    catchButton = (
      <button
        type="button"
        class="btn btn-outline-secondary"
        style={{ textTransform: "uppercase" }}
        disabled
      >
        Catched
      </button>
    );
  }

  return (
    <div class="container">
      <div
        className="cards shadow-sm p-3 mb-5 bg-white rounded"
        key={actualPokemon.id}
      >
        <div class="row">
          <h1
            style={{ textTransform: "capitalize" }}
            class="col align-self-center"
          >
            {actualPokemon.name}
          </h1>
        </div>
        <div class="row">
          <img class="col align-self-center" src={sprites.front_default} />
        </div>
        <div class="row">
          <div class="col align-self-start">
            <Link
              to={path}
              render={(props) => (
                <PokemonDetail actualPokemon={actualPokemon} />
              )}
            >
              <button
                type="button"
                class="btn btn-secondary"
                to={path}
                style={{ textTransform: "uppercase" }}
              >
                Details
              </button>
            </Link>
          </div>
          <div class="col align-self-end">{catchButton}</div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
};

export default PokemonCard;
