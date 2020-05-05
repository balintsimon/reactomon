import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";

function componentDidMount(id) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => {
    console.log(res.data);

    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  });
}

export default class PokemonDetail extends Component {
  state = {
    actualPokemon: {},
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.params.id}/`)
      .then((res) => {
        this.setState({ actualPokemon: res.data });
      });
  }

  render() {
    return (
      <div className="cards">
        <p>ID:</p>
      </div>
    );
  }
}
