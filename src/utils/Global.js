import { createGlobalStyle } from "styled-components";

import { normalize } from "polished";
import '@fontsource/dm-sans'
import { breakpoints } from "./breakpoints";



export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;

  @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.xl}px) {

    font-size:13px;
  
}

*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: DM Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #FFA5BA;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #f7d5dd;    /* color of the scroll thumb */
  border-radius: 3px;       /* roundness of the scroll thumb */
  /* creates padding around scroll thumb */
}

main {
  width: 90%;
  margin: 0 auto;
}
`;