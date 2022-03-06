import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: all 0.3s;

    font: 400 16px Comfortaa, sans-serif;
  }

  h1, h2, p, label, button, a {
    color: ${({ theme }) => theme.colors.dark};
  }

  div::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  }

  div::-webkit-scrollbar-track {
    background: none;
  }

  div::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 10px;
    background-clip: content-box;
    border: 1px solid transparent;
  }


  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    outline: none;
    -webkit-tap-highlight-color: transparent;

    transition: opacity .2s;

    &:active {
      opacity: 0.7;
    }
  }

  fieldset {
    border: 0;
  }

  input {
    outline: none;
  }
`
