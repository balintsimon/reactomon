import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../elements/Navbar";

export default function Header() {
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
      </Link>
    </Navbar>
  );
}

const linkStyle = { color: "#fff", textDecoration: "none" };
