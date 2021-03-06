import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-text: #E7E7EB;
    --color-blue: #3C47E9;
    --color-yellow: #FFEC65;
    --color-gray: #616475;
    --bg-sidebar: #1E213A;
    --bg-body: #100E1D;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Raleway', system-ui, sans-serif;
    font-size: 1.6rem;
    margin: 0;      
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-body);
    color: var(--color-text);
    scrollbar-color: var(--color-blue) var(--color-text);
	  scrollbar-width: thin;
 
  }
  @media (any-hover: hover) {
    ::-webkit-scrollbar {
    border-radius: 1rem;
    width: 0.5rem;
    height: 2rem;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--color-text);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-blue);
    border-radius: 1rem;
  }
  }
  
`;
