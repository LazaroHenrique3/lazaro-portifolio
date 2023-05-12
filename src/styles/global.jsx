import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Orbitron', sans-serif;
        color: ${(props) => props.theme.color_green};
        background-color: ${(props) => props.theme.color_dark};
    }
`