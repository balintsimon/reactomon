import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CatchedContext } from "../../CatchedContext";

const CatchedPokemon = () => {
  const [catchedPokemon, setCatchedPokemon] = useContext(CatchedContext);

  return catchedPokemon.length != 0 ? (
    catchedPokemon.map((actualPokemon) => (
      <div className="cards" key={actualPokemon.id}>
        <img src={actualPokemon.sprite} />
        <p>
          <b>{actualPokemon.name}</b>
        </p>
        <div>Id: {actualPokemon.id}</div>
      </div>
    ))
  ) : (
    <div>
      <p>Haven't catched any Pokemons yet</p>
    </div>
  );
};

export default CatchedPokemon;
