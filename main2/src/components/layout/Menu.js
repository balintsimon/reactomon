import React, { Component } from "react";
import { elastic as BurgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <BurgerMenu>
        <img
          src={window.location.origin + "/icon.png"}
          height="100"
          width="100"
          className="menu-item"
          href="/"
        />
        <a id="home" className="menu-item" href="/" style={{ color: "red" }}>
          Home
        </a>
        <a
          id="about"
          className="menu-item"
          href="/pokemons"
          url={"https://pokeapi.co/api/v2/pokemon?offset=0&limit=24"}
          style={{ color: "red" }}
        >
          Pokemons
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </BurgerMenu>
    );
  }
}
