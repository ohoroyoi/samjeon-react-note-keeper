import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    font-family: 'Nanum Gothic', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    margin: 0px;
    padding: 0px;
  }
`;

export default GlobalStyle;
