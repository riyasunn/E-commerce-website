import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
body {
    margin: 0;
    margin-bottom: 50px;
    padding: 0px 40px;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media screen and (max-width: 800px) {
      padding: 0px 30px;
      margin-top: 130px;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }

`
