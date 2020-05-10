import ReactCardFlip from "react-card-flip";
import React, { useState, useContext } from "react";
import Get from "../../hook/Get";

import { CatchedContext } from "../CatchedPokemonContext";

export default function CatchedPokemonCard(props) {
  let actualPokemon = props.pokemon;

  const [catched, setCatched] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const [catchedPokemon, setCatchedPokemon] = useContext(CatchedContext);

  let setFlipCard = (e) => {
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };

  const catchNewPokemon = (e) => {
    e.preventDefault();
    console.log("catch pressed");
  };

  let mainCard = (
    <>
      <div
        id={actualPokemon.name}
        className="card border-warning mb-3 mt-3 clearfix"
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
          <h5 className="card-title">{actualPokemon.name.toUpperCase()}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button " class="btn btn-light" onClick={setFlipCard}>
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
          id={actualPokemon.name}
          className="card border-warning mb-3 clearfix"
          style={{ width: "18rem" }}
        >
          <img
            className="card-img-top"
            src={actualPokemon.sprites.front_default}
            style={{ backgroundColor: "gold" }}
          />

          <div className="card-body">
            <h5 className="card-title">{actualPokemon.name.toUpperCase()}</h5>
            <p className="card-text">Height: {actualPokemon.height}</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light" onClick={setFlipCard}>
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
