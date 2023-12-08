import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    padding: 2.5rem 10rem;

    background: ${props => props.theme['brown-200']};
    color: ${props => props.theme['off-white']};

    box-shadow: 0px 1px 5px #888;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {

        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        li {
            list-style: none;
            a {
                text-decoration: none;
                font-size: 0.875rem;
                font-weight: 700;
                color: ${props => props.theme['off-white']};

                &:hover {
                color: ${props => props.theme['brown-300']};

                }
            }
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        div {    
            gap: 0.5rem;

            img {
                width: 4rem;
            }

            span {
                font-size: 0.875rem;
            }
            
            strong {
                font-size: 1.125rem;
                color: ${props => props.theme['off-white']};
            }
            
            span.emoji {
                font-size: 1.5rem;
            }
        }

        div.social-media-icons {
            width: 75%;

            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            a{
                border-radius: 50%;
                padding: 0.5rem;

                &:hover {
                    background: ${props => props.theme['brown-300']};
                }
            }

        }
    }
`;