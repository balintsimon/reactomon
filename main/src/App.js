import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export class App extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((res) => this.setState({ pokemons: res.data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" render={} />
            <Route path="/pokemons" render={} />
            <Route path="/types" render={} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
