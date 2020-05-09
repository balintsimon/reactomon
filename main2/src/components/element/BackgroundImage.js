import styled from "styled-components";

export default styled.img`
  z-index: -1;
  display: block;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
  min-width: 100%;
  width: ${(props) => props.width};
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`;
