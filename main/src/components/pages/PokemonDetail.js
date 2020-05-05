import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonDetail() {
  let { id } = useParams();

  const [actualPokemon, setActualPokemon] = useState({});
  const [sprites, setSprites] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //useEffect((1st argument: what to run after loading) => {whatever; return () => {cleanup function before every useEffect call} }, [2nd: array of dependencies, when to run again?]);

  useEffect(() => {
    //console.log(`fetching data from https://pokeapi.co/api/v2/pokemon/${id}/`);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setActualPokemon(res.data);
        setSprites(res.data.sprites);
      })
      .then(axios.get)
      .then(console.log);
  }, []);

  return (
    <div className="cards">
      <img src={sprites.front_default} />
      <p>
        <b>{actualPokemon.name}</b>
      </p>
      <div>Id: {actualPokemon.id}</div>
      <div>Height: {actualPokemon.height}</div>
      <div>Weight: {actualPokemon.weight}</div>
      <div>Base experience: {actualPokemon.base_experience}</div>
    </div>
  );
}

export default React.memo(PokemonDetail);
