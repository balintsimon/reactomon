import React, { useState, createContext } from "react";

export const CatchedContext = createContext();

export const CatchedProvider = (props) => {
  const [catchedPokemon, setCatchedPokemon] = useState([]);
  return (
    <CatchedContext.Provider value={[catchedPokemon, setCatchedPokemon]}>
      {props.children}
    </CatchedContext.Provider>
  );
};
