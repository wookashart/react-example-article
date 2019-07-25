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
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Caveat Brush', cursive;
    }
`;
