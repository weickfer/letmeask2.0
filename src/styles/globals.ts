import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.white.background};
    color: #29292e;
  }

  body, input, textarea {
    font: 400 15px 'Roboto', sans-serif;
  }
`