import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import Get from "../../hook/Get";

export default function PokemonCard(props) {
  let pokemon = props.pokemon;
  const [isLoading, actualPokemon] = Get(pokemon.url);
  const [isFlipped, setIsFlipped] = useState(false);

  let handleClick = (e) => {
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };

  let mainCard = (
    <>
      <div
        id={pokemon.name}
        className="card border-warning mb-3 clearfix"
        style={{ width: "18rem" }}
      >
        {actualPokemon != null ? (
          <img
            className="card-img-top"
            src={actualPokemon.sprites.front_default}
            style={{ background: "gold" }}
          />
        ) : (
          <img />
        )}
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button " class="btn btn-warning">
              Catch!
            </button>
            <button type="button " class="btn btn-light" onClick={handleClick}>
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );

  let backCard =
    actualPokemon != null ? (
      <>
        <div
          id={pokemon.name}
          className="card border-warning mb-3 clearfix"
          style={{ width: "18rem" }}
        >
          <img
            className="card-img-top"
            src={actualPokemon.sprites.front_default}
            style={{ background: "gold" }}
          />

          <div className="card-body">
            <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
            <p className="card-text">Height: {actualPokemon.height}</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-warning">
                Catch!
              </button>
              <button type="button" class="btn btn-light" onClick={handleClick}>
                Main
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div />
    );

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>{mainCard}</div>
      <div>{backCard}</div>
    </ReactCardFlip>
  );
}
