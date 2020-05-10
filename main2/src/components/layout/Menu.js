import React, { Component } from "react";
import { elastic as BurgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <BurgerMenu isOpen={false}>
        <img
          src={window.location.origin + "/icon.png"}
          height="100"
          width="100"
          className="menu-item"
          href="/"
        />
        <Link id="home" className="menu-item" to="/" style={{ color: "red" }}>
          Home
        </Link>
        <Link
          id="about"
          className="menu-item"
          to="/pokemons"
          url={"https://pokeapi.co/api/v2/pokemon?offset=0&limit=24"}
          style={{ color: "red" }}
        >
          Pokemons
        </Link>
        <Link
          id="contact"
          className="menu-item"
          to="/catched"
          style={{ color: "red" }}
        >
          Catched Pokemons
        </Link>
      </BurgerMenu>
    );
  }
}
