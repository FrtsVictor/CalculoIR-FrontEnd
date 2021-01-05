import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
    min-height: 100%;
}

html, body{
    font-family: 'Roboto', sans-serif;
    height: 100%;
    margin: 0 auto;
}

body, input, button {
    font: 16px;
}

button{
    cursor: pointer;
}

`;
