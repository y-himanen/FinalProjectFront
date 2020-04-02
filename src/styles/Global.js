import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-align: justify;
  }
  
  h1, h3, p {
    padding-left: 300px;
    padding-right: 300px;
    padding-bottom: 15px;
  }  
  
  h1 {
    font-size: 30px;
    text-align: center;
  }
  
  h3 {
    font-size: 20px;
  }
  
  p {
    font-size: 16px;
  }
  
  li {
    list-style-type: none;
  }
  
  .dict {
    text-align: center;
  }
  
  
`;

export default GlobalStyles;