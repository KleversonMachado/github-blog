import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue']};
    z-index: 999;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }
`