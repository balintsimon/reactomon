import React, { Component } from "react";

const TypeElement = (props) => {
  return props.types.map((type) => (
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
};

export default TypeElement;
