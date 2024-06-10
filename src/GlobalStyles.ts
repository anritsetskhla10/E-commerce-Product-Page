import {createGlobalStyle } from 'styled-components'




const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Kumbh Sans", sans-serif;
    }

    body {
        min-width: 100vw;
        min-height: 100vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

export default GlobalStyles;