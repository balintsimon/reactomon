import React from "react";

const TypeElement = (props) => {
  return props.types.map((type) => (
    <React.Fragment>
      <div
        className="cards"
        key={type.url}
        name={type.name}
        data-url={type.url}
      >
        {type.name}
      </div>
    </React.Fragment>
  ));
};

export default TypeElement;
