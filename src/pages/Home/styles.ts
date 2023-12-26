import styled from 'styled-components';

export const HomeWrapper = styled.main`
    height: 100vh;
    max-width: 100vw;

    display: flex;

    img#main-photo-mila {
        position: absolute; 
        bottom: 0;
        height: 40vh;

        transform: translateX(-100%);
        animation: renderPhotos 1.25s forwards;  
    }

    img#small-photo-collection {
        position: absolute; 
        right: 43%; 
        top: 40%;
        height: 40vh;
        z-index: 1000;
        opacity: 0.8;

        transform: translateX(-100%);
        animation: renderPhotos 1.25s forwards;  

        -webkit-box-shadow: 16px 16px 39px -21px rgba(0,0,0,0.6);
        -moz-box-shadow: 16px 16px 39px -21px rgba(0,0,0,0.6);
        box-shadow: 16px 16px 39px -21px rgba(0,0,0,0.6);
    }

    img#big-photo-collection {
        position: absolute;
        right: 10%;
        height: 100vh;

        transform: translateX(-100%);
        animation: renderPhotos 1.25s forwards;    
    }   
    
    

    @keyframes renderPhotos {
        0% {
            opacity: 0;
            transform: translateX(-100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const CollectionInfoAndAcess = styled.div`
    display: flex;
    align-items: center;    
    flex-direction: column;
    gap: 1rem;

    svg {
        margin-top: 3rem;

        border: 2px dashed;
        border-radius: 50%;
        padding: 3rem;

        color: ${props => props.theme['green-500']};
    }

    margin: 9rem 0 0 10rem;

    color: ${props => props.theme['green-500']};

    h2 {
        font-size: 2rem;
    }

    h1 {
        font-size: 2.5rem;
        font-family: 'Playfair Display',serif;
        letter-spacing: 0.25rem;

        color: ${props => props.theme['brown-300']};
    }
`;