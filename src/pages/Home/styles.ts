import styled from 'styled-components';

export const HomeWrapper = styled.main`
    padding: 0 10rem;

    div.what-is-mila-morais {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div.card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20%;
        row-gap: 3rem;
        justify-content: space-around;
    }
`;

export const CardQualities = styled.div`
    border: 3px solid ${props => props.theme['brown-300']};
    border-radius: 8px;

    width: 30.25rem;

    display: flex;
    align-items: center;
    flex-direction: column;


`;