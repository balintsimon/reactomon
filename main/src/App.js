import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/layout/Header";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";

export class App extends Component {
  state = {
    pokemons: [{}],
    types: [{}],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
      .then((res) => {
        this.setState({ pokemons: res.data.results });
      });

    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      this.setState({ types: res.data.results });
    });
  }

  render() {
    return (
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
                  <TypeList types={this.state.types}>Hello</TypeList>
                </div>
              )}
            />

            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <div style={cardStyle}>
                  <PokemonList pokemons={this.state.pokemons} />
                </div>
              )}
            />
            <Route path="/pokemon/:id" children={<PokemonDetail />} />
          </div>
        </div>
      </Router>
    );
  }
}

const cardStyle = {
  display: "flex",
  flexFlow: "row wrap",
};

export default App;
