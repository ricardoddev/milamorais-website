import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['off-white']};
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