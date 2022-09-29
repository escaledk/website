import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, 
  body, 
  #__next {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #__next {
    height: 100vh;
    width: 100vw;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
