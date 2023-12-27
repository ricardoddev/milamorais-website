import styled from 'styled-components';
import { CSSProperties } from 'react';

export const CatalogWrapper = styled.main`
    padding: 4.5rem 10rem 0 10rem;
    
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3.5rem;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        letter-spacing: 1rem;
        color: ${props => props.theme['green-500']};

        padding: 2rem 0;

        text-align: center;

        
    }
`;

export const ImageCarousel = styled.div`
    padding: 2rem;
`;

export const imagesStyles: CSSProperties = {
	height: '40rem',
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
            font-size: 1.125rem;
            span {
                font-weight: 700;
            }
        }
    }
`;

export const CatalogAccessWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15%;

    margin-bottom: 8rem;    

    p {
        font-size: 1.25rem;
        color: ${props => props.theme['green-500']};
        
        width: 40%;

        text-align: justify;

        span {
            font-weight: 700;
        }

        
    }

    button {
        background: ${props => props.theme['green-500']};

        font-size: 1.5rem;
        color: ${props => props.theme['off-white']};

        padding: 1.5rem 1rem;

        border: 0;
        border-radius: 5px;

        -webkit-box-shadow: 0px 0px 12px 0px rgba(18,50,39,0.94); 
        box-shadow: 0px 0px 12px 0px rgba(18,50,39,0.94);

        cursor: pointer;

        &:hover {
            background: ${props => props.theme['brown-300']};
            color: ${props => props.theme['green-500']};
        }
    }
`;

export const MeasurementTableWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    p {
        font-size: 1.25rem;
    }

    img {
        height: 36rem;
        object-fit: contain;
    }
`;

export const ContactWrapper = styled.section`
    margin: 4rem auto 6rem;

    display: flex;
    align-items: center;
    gap: 4rem;

    text-align: center;


    background: ${props => props.theme['gray-300']};
    -webkit-box-shadow: 6px -2px 17px -6px rgba(0,0,0,0.94); 
    box-shadow: 6px -2px 17px -6px rgba(0,0,0,0.94);

    padding: 2rem;


    p {
        font-size: 1.125rem;
        
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    
`;

export const SocialMediaButton = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;

        button {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            padding: 0.5rem 1rem;

            font-size: 1.125rem;
            font-weight: 700;
            color: ${props => props.theme['off-white']};

            border-radius: 5px;
            border: none;

            background: ${props => props.theme['green-500']};

            cursor: pointer;

            opacity: 0.75;

            &:hover {
                opacity: 1;
            }
        }
    }
`;