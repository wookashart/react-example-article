import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Caveat+Brush|Open+Sans:400,700&display=swap&subset=latin-ext');

    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1 {

    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 18px;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;
