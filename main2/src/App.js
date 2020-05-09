import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";

import Menu from "./components/layout/Menu";
import Home from "./components/pages/Home";
import Pokemons from "./components/pages/Pokemons";
import BackgroundImage from "./components/element/BackgroundImage";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BackgroundImage
          src={window.location.origin + "/pikatchu.png"}
        ></BackgroundImage>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/pokemons" component={Pokemons} />
        <Route path="/types" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
