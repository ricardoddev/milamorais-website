import styled from 'styled-components';
import { CSSProperties } from 'react';

export const HomeWrapper = styled.main`
    padding: 7.5rem 10rem;
    background-image: linear-gradient( 44.8deg,  rgba(255,136,102,0.67) -53.1%, rgba(255,221,136,0.28) 49% );

    .logo-mila {
        margin-bottom: 1.5rem;

        height: 18rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.what-is-mila-morais {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        h1 {
            text-align: center;
            font-family: 'Kanit', sans-serif;
            font-size: 3rem;
            line-height: 2;
            letter-spacing: .2rem; 
            color: ${props => props.theme['green-500']}       
        }

        p {
            width: 50%;
            text-align: justify;
        }

        

        
    }

    div.card-container {
        margin: 4rem auto;

        display: flex;
        gap: 2.5rem;
        row-gap: 2rem;
        justify-content: space-evenly;

        h1 {
            color: ${props => props.theme['green-500']};
            font-family: 'Kanit', sans-serif;
            font-size: 1.5rem;
        }

        p {
            text-align: justify;
        }

        div {
            width: 25%;
        }
    }
`;

export const TitleMainCollection = styled.h1`
    
    background: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%), url('src/assets/raizes/bg-raizes.jpg');
    background-size: contain;
    background-position: center;
    
    
    border-top: 2px solid ${props => props.theme['green-500']};
    border-bottom: 2px solid ${props => props.theme['green-500']};
    
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-size: 3.25rem;
    line-height: 1.6;
    letter-spacing: .8rem;
    color: ${props => props.theme['green-500']};
        
`;

export const MainCollection = styled.div`
    -webkit-box-shadow: 0px 0px 12px 3px rgba(100,100,100,0.52); 
    box-shadow: 0px 0px 12px 3px rgba(100,100,100,0.52);

    border-radius: 8px;
    padding: 2rem 0;
`;

export const ImageCarousel = styled.div`
    padding: 4rem 0;
`;

export const imagesStyles: CSSProperties = {
	opacity: '0.9',
	height: '48rem',
	padding: '0.5rem 0',
	objectFit: 'contain',
};

export const ColorExample = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2rem;
    padding-bottom: 4rem;

    img {
        height: 36rem;
    }

    section {
        h2 {
            font-family: 'Kanit', sans-serif;
            font-size: 3rem;
            color: ${props => props.theme['brown-300']}
        }

        p {
            span {
                font-weight: 700;
            }
        }
    }
`;

export const RedirectToCatalog = styled.div`
    background: ${props => props.theme['green-500']};
    width: fit-content;
    
    font-size: 1.25rem;
    font-weight: 700;
    border-radius: 8px;

    padding: 1.5rem;    
    margin: 1rem auto;

    a {
        color: ${props => props.theme['off-white']};
        text-decoration: none;
    }

    &:hover {
        background: ${props => props.theme['green-300']};
        transition: 0.125s ease-in;

        a {
            color: ${props => props.theme['green-500']};
            font-weight: 700;
        }
    }
`;