import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: linear-gradient( 44.8deg,  rgba(255,136,102,0.67) -53.1%, rgba(255,221,136,0.28) 49% );
        -webkit-font-smoothing: antialiased;

        max-width: 120rem;
        margin: 0 auto;

    }

    body, input, textarea, button {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;