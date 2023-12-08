import styled from 'styled-components';

export const NavBarWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${props => props.theme['brown-200']};

    height: 4.5rem;
    padding: 0 10rem;

    box-shadow: 0px 1px 5px #888;
    

`;

export const NavLinksWrapper = styled.nav`
    display: flex;
    justify-content: center;

    ul {
        display: flex;
        gap: 4rem;

        li {
            list-style: none;

            a {
                text-decoration: none;
                font-size: 1.2rem;
                color: ${props => props.theme.white};
                border-bottom: 2.5x solid transparent;
                border-top: 2.5px solid transparent;

                &.active {
                    color: ${props => props.theme['brown-300']};
                    border-bottom: 2.5px solid ${props => props.theme['brown-300']};
                }

                &:hover {
                    color: ${props => props.theme['brown-300']};

                }
            }
        }
    }
`;