import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    width: 100%;
  }
  body {
    margin: 0;
    /*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ol, ul, li {
    list-style: none;
  }
  a, button, input, textarea {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    appearance: none;
  }
  a:focus, button:focus, input:focus, textarea:focus {
    outline: none;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
export { theme };