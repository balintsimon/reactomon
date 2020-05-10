import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";

import { CatchedProvider } from "./components/CatchedPokemonContext";
import Menu from "./components/layout/Menu";
import Home from "./components/pages/Home";
import Pokemons2 from "./components/pages/Pokemons2";
import BackgroundImage from "./components/element/BackgroundImage";
import CatchedPokemons from "./components/pages/CatchedPokemons";

import logo from "./logo.svg";
import "./App.css";

// Use for styled elements! NB: line 25
const theme = {
  background: "red",
  textAlign: "center",
  padding: "10px",
  fontSize: "1.3rem",
  borderRadius: "15px",
  fontFamily: " Helvetica, Arial, sans-serif",
};

const App = () => {
  document.title = "Pokemon app";
  return (
    <div id="outer-container">
      <CatchedProvider>
        <BackgroundImage
          src={window.location.origin + "/pikatchu.png"}
        ></BackgroundImage>
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap">
          <ThemeProvider theme={theme}>
            <Router>
              <Route exact path="/" component={Home} />
              <Route path="/pokemons" component={Pokemons2} />
              <Route path="/types" />
              <Route path="/catched" component={CatchedPokemons} />
            </Router>
          </ThemeProvider>
        </main>
      </CatchedProvider>
    </div>
  );
};

export default App;
