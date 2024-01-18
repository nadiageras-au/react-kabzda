import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  div {
    margin-bottom: 20px;
  }

  // body {
  //   background-color: ${myTheme.colors.grey.light};
  // }
`