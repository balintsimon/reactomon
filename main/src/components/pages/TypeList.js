import React, { Component } from "react";
import PropTypes from "prop-types";
import TypeElement from "./TypeElement";

class TypeList extends Component {
  render() {
    return (
      <React.Fragment>
        <TypeElement types={this.props.types} />
      </React.Fragment>
    );
  }
}

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
