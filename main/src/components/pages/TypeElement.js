import React, { Component } from "react";

export default class TypeElement extends Component {
  render() {
    return this.props.types.map((type) => (
      <React.Fragment>
        <div
          className="cards"
          key={type.index}
          name={type.name}
          data-url={type.url}
        >
          {type.name}
        </div>
      </React.Fragment>
    ));
  }
}
