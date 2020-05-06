import React, { useState, createContext } from "react";

export const CatchedContext = createContext();

export const CatchedProvider = (props) => {
  const [catchedPokemons, setCatchedPokemons] = useState();
  return (
    <CatchedContext.Provider value={[catchedPokemons, setCatchedPokemons]}>
      {props.children}
    </CatchedContext.Provider>
  );
};
