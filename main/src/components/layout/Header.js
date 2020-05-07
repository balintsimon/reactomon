import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../elements/Navbar";
import Button from "../../elements/Button";
import { CatchedContext } from "../../CatchedContext";

export default function Header() {
  const [catchedPokemon, setCatchedPokemon] = useContext(CatchedContext);

  return (
    <Navbar>
      <h1>Pokemon</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/types">
        Types
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/catched">
        <Button>Catched</Button>
      </Link>
    </Navbar>
  );
}

const linkStyle = { color: "#fff", textDecoration: "none" };
