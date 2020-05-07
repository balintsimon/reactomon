import React from "react";

const TypeElement = (props) => {
  return props.types.map((type) => (
    <React.Fragment>
      <div
        className="cards shadow-sm p-1 mb-1 bg-white rounded"
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
