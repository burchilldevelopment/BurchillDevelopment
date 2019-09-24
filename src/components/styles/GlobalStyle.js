import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${background});
    background-attachment: fixed;
    background-size: cover;
    @supports (-webkit-overflow-scrolling: touch) {
      background-image: unset;
      background-attachment: unset;
      background-size: unset;
      background: rgb(0, 0, 50);
    }
  }
`;

export default GlobalStyle;
