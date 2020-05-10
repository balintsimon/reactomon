import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CatchedContext } from "../CatchedPokemonContext";
import CatchedPokemonCard from "./CatchedPokemonCard";
import H1 from "../element/H1";

const CatchedPokemons = () => {
  const [catchedPokemon, setCatchedPokemon] = useContext(CatchedContext);
  let content =
    catchedPokemon.length === 0 ? (
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <H1>Sorry, haven't catched anything yet</H1>
      </div>
    ) : (
      catchedPokemon.map((actualPokemon) => (
        <CatchedPokemonCard pokemon={actualPokemon} key={actualPokemon.url} />
      ))
    );

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 align-self-center"
          style={{ display: "flex", flexFlow: "row wrap" }}
        >
          <div className="card-deck mt-5 mb-5">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default CatchedPokemons;
