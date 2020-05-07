import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/layout/Header";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";
import { CatchedProvider } from "./CatchedContext";
import CatchedPokemon from "./components/pages/CatchedPokemon";

const theme = {
  primary: "#fff",
  background: "#333",
  secondaryBackground: "#414141",

  primaryButton: "#666",
  secondaryButton: "#333",
};

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=24")
      .then((res) => {
        setPokemons(res.data.results);
      });

    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      setTypes(res.data.results);
    });
  }, []);

  return (
    <CatchedProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="container" style={maxWidth}>
            <div className="row">
              <div className="col align-self-start">
                <Header />
                <img
                  src={window.location.origin + "/icon.png"}
                  style={{ maxWidth: "60%", padding: "10px" }}
                />
              </div>
              <div className="col-9">
                <div className="App">
                  <div className="container">
                    <Route
                      exact
                      path="/"
                      children={<React.Fragment>Hello</React.Fragment>}
                    />
                    <Route
                      path="/types"
                      render={(props) => <TypeList types={types}></TypeList>}
                    />

                    <Route
                      exact
                      path="/pokemons"
                      render={(props) => (
                        <div style={cardStyle}>
                          <PokemonList pokemons={pokemons} key={pokemons} />
                        </div>
                      )}
                    />
                    <Route path="/pokemon/:id" children={<PokemonDetail />} />
                    <Route path="/catched" children={<CatchedPokemon />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </CatchedProvider>
  );
};

const cardStyle = {
  display: "flex",
  flexFlow: "row wrap",
};

const maxWidth = {
  maxWidth: "3000px",
};

export default App;
