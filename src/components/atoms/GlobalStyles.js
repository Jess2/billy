import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 14px;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    min-width: 1280px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 2.2rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  h5 {
    font-size: 1.4rem;
  }
  h6 {
    font-size: 1.2rem;
  }
  input, textarea {
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    width: 100%;
    padding: 0.7em;
  }
  .btn--basic {
    background-color: yellow;
  }
  *:focus {
    outline: ${({ theme }) => theme.palette['darkgray']} auto 1px;
  }
  button {
    background: none;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
  a, button {
    &:focus {
      outline: none;
    }
  }
`;
export default globalStyles;