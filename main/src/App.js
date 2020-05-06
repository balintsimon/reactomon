import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/layout/Header";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";

const theme = {
  primary: "#fff",
  background: "#333",
  secondaryBackground: "#414141",

  primaryButton: "#666",
  secondaryButton: "#333",
};

const App = () => {
  const [pokemons, setPokemons] = useState({});
  const [types, setTypes] = useState({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
      .then((res) => {
        setPokemons(res.data.results);
      });

    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      setTypes(res.data.results);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => <React.Fragment>Hello</React.Fragment>}
            />
            <Route
              path="/types"
              render={(props) => (
                <div style={cardStyle}>
                  <TypeList types={types}>Hello</TypeList>
                </div>
              )}
            />

            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <div style={cardStyle}>
                  <PokemonList pokemons={pokemons} />
                </div>
              )}
            />
            <Route path="/pokemon/:id" children={<PokemonDetail />} />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

const cardStyle = {
  display: "flex",
  flexFlow: "row wrap",
};

export default App;
