import React from "react";
import H1 from "../element/H1";

const Home = () => {
  return (
    <>
      <br />
      <H1>{"Welcome to Pikachu's home".toUpperCase()}</H1>
      <br />

      <div className="container" style={{ maxWidth: "3000px" }}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3 style={{ textAlign: "center" }}>
              Come and see Pikatchu's friends here.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
