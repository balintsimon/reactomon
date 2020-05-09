import styled from "styled-components";

export default styled.h1`
  text-align: ${(props) => props.theme.textAlign};
  color: ${(props) => props.theme.background};
  font-family: ${(props) => props.theme.fontFamily};
`;
