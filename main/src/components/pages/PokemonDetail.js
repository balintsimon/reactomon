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
        console.log(res.data);
        setActualPokemon(res.data);

        console.log(actualPokemon);

        //setSprites(res.data.name);
        console.log(sprites);
        setSprites(res.data.sprites);
        console.log(sprites);
      })
      .then(axios.get)
      .then(console.log);
  }, []);

  console.log(sprites.front_default);

  return (
    <div className="cards">
      <p>Passed ID: {id}</p>
      <p>Actual pokemon id: {actualPokemon.id}</p>
      <p>{actualPokemon.name}</p>
      <img src={sprites.front_default} />
    </div>
  );
}

export default React.memo(PokemonDetail);
