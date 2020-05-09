import React, { useState } from "react";
import Get from "../../hook/Get";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
  const [isLoading, pokemons] = Get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=24"
  );

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 align-self-center"
          style={{ display: "flex", flexFlow: "row wrap" }}
        >
          {pokemons ? (
            pokemons.results.map((pokemon, index) => (
              <div className="card-deck m-3">
                <PokemonCard pokemon={pokemon} key={index} />
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
