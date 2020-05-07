import React from "react";
import PropTypes from "prop-types";
import TypeElement from "./TypeElement";

const TypeList = (props) => {
  return (
    <React.Fragment>
      <TypeElement types={props.types} key={props.types.name} />
    </React.Fragment>
  );
};

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
