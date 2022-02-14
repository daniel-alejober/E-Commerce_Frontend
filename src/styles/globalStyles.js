import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
  font-size: 62.5%;
  box-sizing: border-box;
}
body{
  line-height: 1.3;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}
*,*::after,*::before{
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}
`;
