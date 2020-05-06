import styled, { ThemeProvider, css } from "styled-components";

export default styled.header`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
  text-align: center;
  padding: 10px;
  font-size: 1.3rem;
  border-radius: 15px;

  font-family: sans-serif;
`;
