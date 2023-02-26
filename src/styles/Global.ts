import { createGlobalStyle } from "styled-components";
import fundo from "../assets/fundo.jpg";

export default createGlobalStyle`
 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Jura', sans-serif;
  }
  body{
    /* background: #F2F3F5; */
    background-image: url(${fundo});
    background-repeat: no-repeat;
    /* background-size: cover; */
    object-fit: cover;
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  
`;
