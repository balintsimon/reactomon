import React, { useState, useEffect, useCallback } from "react";
import Get from "../../hook/Get";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const Pokemons2 = (props) => {
  let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9";

  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState("");

  let nextPage = () => {
    setCount(count + 1);
    setNextPageUrl(pokemons.next);
  };
  let previousPage = () => {
    if (pokemons.previous != null) {
      setCount(count + 1);
      setNextPageUrl(pokemons.previous);
    }
  };

  useEffect(() => {
    let actualUrl = nextPageUrl == "" ? url : nextPageUrl;
    axios
      .get(actualUrl)
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => {
        alert("Oops, something went wrong!");
        console.log(err);
      });
  }, [nextPageUrl, count]);

  let results = pokemons != null ? pokemons.results : [];

  let backButton =
    pokemons != null ? (
      pokemons.prveious !== null ? (
        <button class={pokemons.previous} onClick={previousPage}>
          Previous
        </button>
      ) : (
        <button disabled="true">Previous</button>
      )
    ) : (
      <button disabled>Previous</button>
    );

  let page = (
    <div className="container">
      {backButton}
      {pokemons ? (
        <button class={pokemons.next} onClick={nextPage}>
          Next
        </button>
      ) : (
        <div />
      )}
      <div className="row">
        <div
          className="col-12 align-self-center"
          style={{ display: "flex", flexFlow: "row wrap" }}
        >
          {pokemons ? (
            results.map((pokemon, index) => (
              <div className="card-deck m-3">
                <PokemonCard pokemon={pokemon} key={pokemon.url} />
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );

  return page;
};

export default Pokemons2;
