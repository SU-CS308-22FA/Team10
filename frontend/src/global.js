import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: "#FFFFFF";
    color: "#343434";
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;
