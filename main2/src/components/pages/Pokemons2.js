import React, { useState, useEffect, useCallback } from "react";
import Get from "../../hook/Get";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const Pokemons2 = (props) => {
  let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9";

  const [pokemons, setPokemons] = useState(null);
  const [count, setCount] = useState(0);
  const [nextPageUrl, setNextPageUrl] = useState("");

  let nextPage = () => {
    if (pokemons.next != null) {
      setCount(count + 1);
      setNextPageUrl(pokemons.next);
    }
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
      pokemons.previous !== null ? (
        <li className="page-item">
          <a class="page-link" onClick={previousPage}>
            Previous
          </a>
        </li>
      ) : (
        <li className="page-item" disabled>
          <a class="page-link">Previous</a>
        </li>
      )
    ) : (
      <div />
    );

  let nextButton =
    pokemons != null ? (
      pokemons.next !== null ? (
        <li className="page-item">
          <a class="page-link" onClick={nextPage}>
            Next
          </a>
        </li>
      ) : (
        <li className="page-item" disabled>
          <a class="page-link">Next</a>
        </li>
      )
    ) : (
      <div />
    );

  let pagination = (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        {backButton}
        {nextButton}
      </ul>
    </nav>
  );

  let page = (
    <div className="container">
      {pagination}
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
